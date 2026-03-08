import express from "express";
import axios from "axios";
import * as cheerio from "cheerio";

const app = express();
const PORT = 3000;

app.get("/api/daily-devotional", async (req, res) => {
  try {
    const response = await axios.get(
      "https://www.dailyscripture.net/daily-meditation/",
    );
    const html = response.data;

    const $ = cheerio.load(html);

    const postContent = $(".post-content");

    if (!postContent.length) {
      return res.status(404).json({
        error: "Tidak ada renungan hari ini.",
      });
    }

    const gospelReading = postContent
      .find("blockquote")
      .first()
      .text()
      .replace(/\s+/g, " ")
      .trim();

    let meditationText = "";
    postContent.children("p").each((i, el) => {
      const text = $(el).text().trim();
      if (
        text.length > 40 &&
        !text.includes("Daily Quote") &&
        !text.includes("Scripture quotations")
      ) {
        meditationText += text + "\n\n";
      }
    });

    const prayer = postContent.find(".wp-block-pullquote p").text().trim();

    const copyright = postContent
      .find(".readings-footer p")
      .first()
      .text()
      .trim();

    res.json({
      success: true,
      data: {
        gospel: gospelReading,
        meditation: meditationText.trim(),
        prayer: prayer,
        attribution: copyright,
      },
    });
  } catch (error) {
    console.error("Gagal melakukan scraping:", error.message);
    res
      .status(500)
      .json({ success: false, error: "Gagal menyedot data dari sumber." });
  }
});

app.listen(PORT, () => {
  console.log(`API Renungan Harian berjalan di http://localhost:${PORT}`);
});
