# 📝 Notes API

**Notes API** is a RESTful backend application built with Node.js, Express, and MongoDB. It provides secure user authentication and an API for creating, editing, searching, and deleting personal notes.

The project also includes interactive API documentation using Swagger (OpenAPI).

---

## 🚀 Main Features
- User registration and authentication
- JWT authentication with Access and Refresh Tokens
- Password hashing using bcrypt
- User session management
- CRUD operations for notes
- Search and pagination
- Request validation using Joi
- Centralized error handling
- MongoDB integration using Mongoose
- Interactive API documentation with Swagger (OpenAPI)

---

## 🛠 Technologies Used

| Technology            | Purpose                           |
| :-------------------- | :----------------------------     |
| **Node.js**           | Backend runtime environment       |
| **Express.js**        | Web framework for building the API|
| **MongoDB**           | NoSQL database                    |
| **Mongoose**          | MongoDB object modeling           |
| **JWT**               | User authentication               |
| **bcrypt**            | Password hashing                  |
| **Joi**               | Request validation                |
| **Swagger (OpenAPI)** | API documentation                 |
| **cookie-parser**     | Cookie handling                   |
| **dotenv**            | Environment variable management   |

---

## 📖 API Documentation

Full API documentation is available through [Swagger UI](https://nodejs-hw-5-5zfu.onrender.com/notes-api-docs).

---

## 🔐 Authentication

The API uses JWT-based authentication with Access and Refresh Tokens.

- The Access Token is used to access protected routes.
- The Refresh Token is used to obtain a new Access Token without requiring the user to log in again.
- The Refresh Token is stored in an HTTP-only cookie, helping prevent client-side JavaScript from directly accessing the token.

---

## ⚙️ Installation and Running

**Clone the repository:**

```bash
git clone https://github.com/OlhaBorzhynska/nodejs-hw.git
```

**Install dependencies:**

```bash
npm install
```

**Start the development server:**

```bash
npm run dev
```
