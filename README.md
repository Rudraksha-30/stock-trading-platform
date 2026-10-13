# Zerodha Clone – Stock Trading Platform

A full-stack web development project inspired by [Zerodha](https://zerodha.com/), India's leading retail stockbroker. This project recreates key parts of a stock trading platform, including a responsive landing website, a trading dashboard, and a backend server.

Built for educational purposes to explore frontend development, backend integration, and the architecture of a modern financial web application.

## 📌 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [Future Improvements](#-future-improvements)
- [Disclaimer](#-disclaimer)
- [Author](#-author)

## 🚀 Overview

The Zerodha Clone is a web application project designed to replicate the structure and user experience of an online stock trading platform.

The project is divided into three main modules:

- **Frontend:** The main website, featuring informational pages and user-facing components.
- **Dashboard:** A separate React application for the trading dashboard interface.
- **Backend:** A Node.js and Express server responsible for server-side functionality and application data handling.

The modular structure helps separate the user-facing website, dashboard, and server-side logic, making the project easier to maintain and extend.

## ✨ Features

### Frontend Website
- Landing page inspired by Zerodha's official website.
- Dedicated pages for About, Products, Pricing, and Support.
- Signup page with mobile number input and validation.
- Responsive layouts and reusable React components.
- Static image and media assets for the user interface.
- Navigation between different sections of the website.

### Trading Dashboard
- Separate React application for the dashboard interface.
- Organized frontend components and static assets.
- Foundation for building stock portfolio and trading-related views.

### Backend
- Node.js and Express-based server.
- Separate models and schemas for organizing application data.
- Environment-based configuration for sensitive values.
- Modular backend structure for future API development and integration.

> Note: The features above describe the current project structure and implemented interface. Live market data, real order execution, authentication, and other advanced trading capabilities should not be assumed unless they have been implemented and tested.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Frontend user interfaces |
| JavaScript | Application logic |
| HTML5 | Page structure |
| CSS3 | Styling and layouts |
| Node.js | Backend runtime |
| Express.js | Backend server and API framework |
| npm | Dependency management |
| Git & GitHub | Version control and source code hosting |

## 📂 Project Structure

```text
ZERODHA-CLONE/
│
├── frontend/
│   ├── public/
│   │   └── media/
│   │       └── images/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── dashboard/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── package-lock.json
│
├── backend/
│   ├── model/
│   ├── schemas/
│   ├── index.js
│   └── package.json
│
├── .gitignore
└── README.md
```

*The tree highlights the main project folders; individual source files may vary.*

## ⚙️ Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following:

- [Node.js](https://nodejs.org/) — preferably an LTS version.
- npm, included with Node.js.
- [Git](https://git-scm.com/).

Verify the installations:

```bash
node --version
npm --version
git --version
```

### 1. Clone the Repository

```bash
git clone https://github.com/Rudraksha-30/stock-trading-platform.git
cd stock-trading-platform
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Dashboard Dependencies

Open another terminal from the repository root, then run:

```bash
cd dashboard
npm install
```

### 4. Install Backend Dependencies

Open another terminal from the repository root, then run:

```bash
cd backend
npm install
```

## ▶️ Running the Project

Run each module in a separate terminal.

### Start the Frontend

```bash
cd frontend
npm start
```

Use the local URL printed by the development server.

### Start the Dashboard

```bash
cd dashboard
npm start
```

Use the URL printed by its development server. If the frontend and dashboard both use port `3000`, start one on a different available port when prompted.

### Start the Backend

```bash
cd backend
npm start
```

If the backend's `package.json` does not define a start script, check its available scripts or run the entry point directly:

```bash
node index.js
```

Ensure any required environment variables and database services are configured before starting the backend.

## 🔐 Environment Variables

The backend may require environment variables for configuration, API credentials, or database connections.

1. Create a `.env` file inside the `backend/` directory.
2. Add the variable names required by the backend source code.
3. Fill in your own local development values.

Example template:

```env
PORT=8080
# Add other variables required by your backend configuration.
```

The port shown is an example; use the port expected by your server configuration.

**Security:** Never commit `.env` files, API keys, database credentials, or other secrets to GitHub. Use environment variables in deployment environments as well.

## 🔮 Future Improvements

Potential enhancements include:

- User authentication and secure session management.
- Real-time stock market data integration.
- Interactive stock charts and price history.
- Watchlists and portfolio tracking.
- Buy and sell order simulations.
- Transaction history and order management.
- Backend API integration with the dashboard.
- Improved form validation, error handling, and loading states.
- Automated unit and integration testing.
- Deployment with separate configurations for the frontend, dashboard, and backend.

These are potential improvements and are not necessarily part of the current implementation.

## ⚠️ Disclaimer

This project is an independent educational clone created for learning and demonstration purposes. It is not affiliated with, endorsed by, or connected to Zerodha Broking Limited.

It does not constitute a real brokerage or financial service. Do not use it to make actual financial transactions or submit real financial credentials.

## 👨‍💻 Author

**Rudraksha Chouhan**

- GitHub: [@Rudraksha-30](https://github.com/Rudraksha-30)
- Project Repository: [stock-trading-platform](https://github.com/Rudraksha-30/stock-trading-platform)

---

⭐ If you find this project useful for learning full-stack web development, consider starring the repository.
