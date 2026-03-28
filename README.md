# 🧪 Playwright E2E Testing 

This project demonstrates a **full end-to-end (E2E) test automation flow** using [Playwright](https://playwright.dev/).  
It covers login, product selection, cart validation, checkout, and order completion on the **SauceDemo** application.

---

## 🚀 Features
- **LoginPage**: Validates login success and failure scenarios.  
- **ProductPage**: Handles product selection, price validation, and cart operations.  
- **CartPage**: Ensures cart price accuracy and checkout navigation.  
- **CheckoutPage**: Validates user details, order summary, tax calculation, and order completion.  
- **Full E2E Flow**: Runs a complete test from login to order confirmation.

---

## 📂 Project Structure
├── pages/
│   ├── LoginPage.js
│   ├── ProductPage.js
│   ├── CartPage.js
│   └── CheckoutPage.js
├── tests/
│   └── e2e.test.js
└── README.md

---

## ⚙️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/deepika-nagarajan-git/playwright-e2e-testing.git
   cd playwright-e2e-testing

2. Install dependencies: npm install
3. Run tests: npx playwright test

---

## 📸 Demo Flow
- Navigate to SauceDemo login page.
- Login with valid credentials.
- Select a product and add it to the cart.
- Validate cart price and proceed to checkout.
- Enter user details, validate order summary, and finish the order

---

## 🛠️ Tech Stack
- Playwright – Modern end-to-end testing framework.
- JavaScript (ES6) – Test scripting language.
- Node.js – Runtime environment.

---

## 📜 License
This project is licensed under the MIT License – feel free to use and adapt it.

---

## 👨‍💻 About Me
This project is part of my portfolio. It highlights my ability to design scalable, maintainable, and professional test automation frameworks.


