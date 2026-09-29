# Nagar — City Complaint & Service Request Platform (Frontend)

CSE352 Advanced Java Lab project. Frontend: **React + HTML + CSS** (Vite দিয়ে)।

## আগে যা install থাকতে হবে
1. **Node.js (LTS, version 18 বা তার উপরে)** — https://nodejs.org থেকে নামান।
   Install এর পর terminal এ `node -v` লিখে version দেখুন।
2. **VS Code** — https://code.visualstudio.com

## Run করার ধাপ
1. Zip ফাইলটা **Extract** করুন (যেমন `D:\nagar-frontend`)।
2. VS Code খুলে **File → Open Folder** থেকে `nagar-frontend` folder select করুন।
3. **Terminal → New Terminal** (shortcut: Ctrl + `) খুলুন।
4. প্রথমবার শুধু এই command দিন (internet লাগবে):
   ```
   npm install
   ```
5. তারপর project চালান:
   ```
   npm run dev
   ```
6. Browser এ `http://localhost:5173` খুলবে। Code save করলেই page auto update হবে।
7. বন্ধ করতে terminal এ **Ctrl + C** চাপুন।

## Production build (optional)
```
npm run build      # dist/ folder তৈরি হবে
npm run preview    # build করা version দেখা
```

## Folder structure
```
nagar-frontend/
├─ index.html            # entry HTML (Google Fonts এখানে)
├─ package.json
├─ vite.config.js
├─ public/favicon.svg
└─ src/
   ├─ main.jsx           # React entry
   ├─ App.jsx            # সব section এখানে জোড়া
   ├─ index.css          # global style, colour tokens
   ├─ data/content.js    # text/data (এখান থেকেই content বদলান)
   ├─ assets/            # ছবি (day, aerial, night)
   └─ components/        # Navbar, Hero, StatusBoard, HowItWorks,
                         # TrackingSection, Departments, Stats, CTA, Footer
```

## সমস্যা হলে
- `npm` is not recognized → Node.js install হয়নি, install করে VS Code বন্ধ করে আবার খুলুন।
- Port 5173 busy → `npm run dev -- --port 3000`
- Font বদলে গেছে → Google Fonts এর জন্য internet লাগে, layout ঠিকই থাকবে।

## পরে Spring Boot backend এর সাথে জোড়ার সময়
Backend চালু থাকলে `vite.config.js` এ proxy দিন:
```js
server: { proxy: { '/api': 'http://localhost:8080' } }
```
তারপর React থেকে `fetch('/api/complaints')` করলেই Spring Boot REST API এ যাবে।
