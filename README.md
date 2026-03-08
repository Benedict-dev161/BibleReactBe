# 🛠️ Daily Devotional API (Scraper Engine)

A lightweight **Node.js REST API** designed to serve as a proxy scraper for the Bible App. It extracts daily Gospel readings, meditations, and prayers in real-time from external sources and delivers them as structured JSON.

---

## 🏗 Architecture & Design Decisions

* **Targeted Scraping:** Uses `Cheerio` for high-performance DOM parsing instead of heavy headless browsers (like Puppeteer), ensuring low RAM usage.
* **Decoupled Delivery:** Separates data extraction from the React Native frontend to bypass **CORS issues** and reduce mobile client overhead.
* **Stateless Operation:** No database required. It fetches fresh data on every request, ensuring maximum speed and zero maintenance costs.

---

## 🛠 Tech Stack

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime** | Node.js | Server-side execution |
| **Framework** | Express.js | Web framework for routing and middleware |
| **HTTP Client** | Axios | Fetching raw HTML from external sources |
| **Parser** | Cheerio | Fast, flexible, and lean jQuery implementation for the server |

---

## 📖 API Documentation

### 1. Get Daily Devotional
Fetch the latest devotional content for the current date.

* **Endpoint:** `/api/daily-devotional`
* **Method:** `GET`
* **Success Response (200 OK):**

```json
{
  "success": true,
  "data": {
    "gospel": "Reading text...",
    "meditation": "Meditation text...",
    "prayer": "Prayer text...",
    "attribution": "Copyright source information..."
  }
}
```

