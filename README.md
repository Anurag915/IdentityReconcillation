# Bitespeed Backend Task: Identity Reconciliation

## 📌 Project Overview
This is a backend service for **Identity Reconciliation**, which processes user-provided emails and phone numbers to determine if they belong to the same identity. The system ensures that all contacts related to a single user are grouped and returned in a structured format.

## 🚀 Features
- Accepts an email and/or phone number and determines if it belongs to an existing identity.
- Maintains **primary** and **secondary** contacts for linked identities.
- Stores data in a **MySQL database** (hosted on Aiven).
- Exposes an API endpoint to retrieve identity reconciliation results.

## 🏗️ Tech Stack
- **Node.js** (Backend)
- **Express.js** (API framework)
- **Sequelize** (ORM for MySQL database)
- **MySQL** (Database hosted on Aiven)
- **Render** (Deployment platform)

---

## 📂 Project Structure
```
.
├── models/            # Sequelize models
├── routes/            # Express API routes
├── server.js          # Entry point for the server
├── .env               # Environment variables (not committed to Git)
├── README.md          # Project documentation
└── package.json       # Dependencies and scripts
```

---

## 🔧 Setup & Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Anurag915/IdentityReconcillation.git
cd IdentityReconcillation
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```
DB_HOST=mysql-xxxxxx-xxxx.h.aivencloud.com
DB_USER=avnadmin
DB_PASSWORD=your_password
DB_NAME=defaultdb
DB_DIALECT=mysql
DB_PORT=17454
```

### 4️⃣ Run Migrations & Start Server
```bash
npm start
```
Server will start on `http://localhost:3000/`

---

## 🛠️ API Endpoints
### **1️⃣ Identify Contact**
- **Endpoint:** `/api/identify`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "email": "test@example.com",
    "phoneNumber": "123456"
  }
  ```
- **Response:**
  ```json
  {
    "contact": {
      "primaryContactId": 1,
      "emails": ["test@example.com", "test1@example.com"],
      "phoneNumbers": ["123456"],
      "secondaryContactIds": [2]
    }
  }
  ```

---

## 🌍 Deployment
This project is deployed on **Render**.
- **Base URL:** [`https://identityreconcillation.onrender.com`](https://identityreconcillation.onrender.com)
- Test the API using:
  ```bash
  curl -X POST https://identityreconcillation.onrender.com/api/identify \
       -H "Content-Type: application/json" \
       -d '{"email": "test@example.com", "phoneNumber": "123456"}'
  ```

---

## ✅ Testing Database (MySQL - Aiven)
### Connect to MySQL Database
```bash
mysql -h mysql-xxxxxx-xxxx.h.aivencloud.com -u avnadmin -p -P 17454
```
### View Data
```sql
USE defaultdb;
SELECT * FROM Contacts;
```

---

## 📜 License
This project is for **Bitespeed's Backend Task** and is not for commercial use.

---

## ✨ Author
- **Anurag Prajapati**
  - GitHub: [Anurag915](https://github.com/Anurag915)

