# 📝 Notes API

**Notes API** is a RESTful backend application developed with Node.js, Express, and MongoDB. It provides secure user authentication and an API for creating, editing, searching, and deleting personal notes. API documentation is implemented using Swagger (OpenAPI).

---

## 🚀 Main Features
- User registration and authentication
- JWT authentication (Access and Refresh Tokens)
- Password hashing using bcrypt
- User session management
- CRUD operations for working with notes
- Search and pagination
- Input data validation
- Centralized error handling
- MongoDB integration using Mongoose
- Interactive API documentation using Swagger

---

## 🛠 Technologies Used

🔹Node.js
🔹Express.js
🔹MongoDB
🔹Mongoose
🔹JWT
🔹bcrypt
🔹Joi
🔹Swagger (OpenAPI)
🔹Cookie-parser
🔹dotenv

---

## 📖 API Documentation

Full API documentation is available through [Swagger UI](https://nodejs-hw-5-5zfu.onrender.com/notes-api-docs).

---

## 🔐 Authentication

- The API uses JWT for user authentication.
- The Access Token is used to access protected routes.
- The Refresh Token allows obtaining a new Access Token without logging in again.
- The Refresh Token is stored in an HTTP-only Cookie, which improves application security.

---

## ⚙️ Installation and Running

```bash
git clone https://github.com/OlhaBorzhynska/nodejs-hw.git
```

```bash
npm install
```

```bash
npm run dev
```
