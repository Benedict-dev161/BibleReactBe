🛠️ Daily Devotional API (Scraper Engine)

A lightweight Node.js REST API designed to serve as a proxy scraper for the Bible App. It extracts daily Gospel readings, meditations, and prayers in real-time from external sources and delivers them as structured JSON.

🏗 Architecture & Design Decisions

This backend was built to solve the "Missing API" problem. Since most daily devotional sources do not provide a free, structured JSON API, this service performs:

Targeted Scraping: Uses Cheerio for high-performance DOM parsing instead of heavy headless browsers (like Puppeteer).

Decoupled Delivery: Separates the data extraction logic from the React Native frontend to bypass CORS issues and reduce mobile client overhead.

Stateless Operation: No database required, ensuring maximum speed and zero maintenance costs.

🛠 Tech Stack

Node.js: Runtime environment.

Express.js: Web framework for routing.

Axios: Promise-based HTTP client for fetching raw HTML.

Cheerio: Implementation of core jQuery for the server, used for parsing the HTML DOM.

🚀 Installation & Local Setup

Clone the Repository:

git clone [https://github.com/Benedict-dev161/BibleReactBe.git](https://github.com/Benedict-dev161/BibleReactBe.git)
cd BibleReactBe


Install Dependencies:

npm install


Verify Configuration:
Ensure "type": "module" is present in your package.json to support ES6 Module syntax.

Launch the Server:

node server.js


The API will be live at http://localhost:3000.

⚠️ Networking & Troubleshooting

Crucial for Mobile Development:

Android Emulator: Access the API via http://10.0.2.2:3000/api/daily-devotional.

Physical Device: You MUST use your computer's local IPv4 address (e.g., http://192.168.1.XX:3000) and ensure both devices are on the same Wi-Fi network.

🛑 Engineering Risks

This project relies on Web Scraping. If the source website changes its CSS classes or HTML structure, the parser in server.js will break and require an update to the selectors.

Disclaimer: Content is sourced from dailyscripture.net for educational and non-commercial use only.
