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

### Get Daily Devotional
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

## 🚀 Installation & Local Setup

### 1. Clone the Repository:
```
git clone [https://github.com/Benedict-dev161/BibleReactBe.git](https://github.com/Benedict-dev161/BibleReactBe.git)
cd BibleReactBe
```

### 2. Install Dependencies:
```
npm install
```

### 3. Verify Configuration:
Ensure **"type": "module"** is present in your package.json and remove any duplicate **"type"** keys to support ES Modules.

### 4. Launch the Server:
```
node server.js
```

## ⚠️ Networking & Troubleshooting

Android Emulator: Access the API via http://10.0.2.2:3000/api/daily-devotional.

Physical Device: Use your computer's local IPv4 address (e.g., http://192.168.1.XX:3000) and ensure both devices are on the same Wi-Fi network.

## 🛑 Engineering Risks

This project relies on Web Scraping. If the source website changes its CSS classes or HTML structure, the parser in server.js will break and require an update to the selectors.

Disclaimer: Content is sourced from [dailyscripture.net](https://www.dailyscripture.net/daily-meditation/) for educational and non-commercial use only.
