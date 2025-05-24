# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# 🧠 Session Storage Feedback App

This is a simple React app that allows users to submit feedback and store it using **Session Storage** or **Local Storage** in the browser.

## 📌 Features

- Add feedback using a text area.
- Store feedback in browser storage (SessionStorage/LocalStorage).
- Automatically retrieves and displays stored feedback on page reload.
- Clean and responsive UI using Bootstrap.

## 🚀 How to Run the Project

### 1. Clone the Repository


git clone https://github.com/bhavini1105/Session-Storage.git
cd Session-Storage

2. Install Dependencies
npm install

3. Start the Development Server
npm run dev

🛠️ Tech Stack
React (with Hooks)

Vite (for fast development)

Bootstrap (for styling)

SessionStorage / LocalStorage (for persistent feedback saving)

📂 Folder Structure

Session-Storage/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── Feedback.jsx
├── package.json
└── README.md