# 🛒 ShopSphere Backend API

A backend REST API for an e-commerce application built using **Node.js, Express.js, MongoDB, and JWT authentication**.

This project is being developed as part of a 15-day backend development project to simulate a real-world remote backend developer workflow.

---

## 📌 Project Status

**Current Status:** In Development 🚧

**Developer:** Vishal

**Role:** Junior Backend Developer

**Development Schedule:** Night Shift — 10:00 PM to 4:00 AM

---

# 🛠️ Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* bcryptjs
* JSON Web Token (JWT)
* Nodemon
* Postman
* Git & GitHub

---

# 📚 What I Have Learned

## Day 1 — Backend Project Setup

### Node.js Project Initialization

Learned how to initialize a Node.js backend project using:

```bash
npm init -y
```

Understood the purpose of:

```text
package.json
```

and how it manages project dependencies and scripts.

---

### Express.js

Learned:

* What Express.js is
* How to create an Express server
* How routes work
* How HTTP requests are handled
* How middleware works
* How to send JSON responses

Example:

```http
GET /api/health
```

---

### Express JSON Middleware

Learned how:

```js
app.use(express.json());
```

allows the server to process JSON request bodies.

---

### Environment Variables

Learned how to use:

```text
.env
```

for configuration such as:

```env
PORT=5000
MONGODB_URI=...
```

and access them using:

```js
process.env.PORT
```

---

### Git Security

Learned why sensitive files should not be uploaded to GitHub.

Created:

```text
.gitignore
```

with:

```text
node_modules
.env
```

---

### Nodemon

Learned how Nodemon automatically restarts the server when code changes.

Development command:

```bash
npm run dev
```

Production-style start command:

```bash
npm start
```

---

## Day 2 — Authentication

### User Authentication

Learned the basic authentication flow:

```text
Register
   ↓
Validate User
   ↓
Hash Password
   ↓
Save User
   ↓
Login
   ↓
Verify Password
   ↓
Generate JWT
```

---

### Password Hashing

Learned why passwords should never be stored as plain text.

Instead of storing:

```text
password123
```

the database stores a secure hash.

Used:

```text
bcryptjs
```

---

### JWT Authentication

Learned the purpose of JSON Web Tokens.

After successful login:

```text
User Login
     ↓
Backend verifies credentials
     ↓
JWT generated
     ↓
Token sent to client
```

The token can later be used to access protected APIs.

---

### Authentication vs Authorization

Learned the difference:

**Authentication**

> "Who are you?"

**Authorization**

> "What are you allowed to do?"

---

# 🚀 APIs Implemented

## Health Check

### GET `/api/health`

Used to verify that the backend server is running.

Example response:

```json
{
  "success": true,
  "message": "Server is running"
}
```

---

## User Registration

### POST `/api/auth/register`

Used to create a new user account.

Example request:

```json
{
  "name": "Vishal",
  "email": "vishal@example.com",
  "password": "password123"
}
```

---

## User Login

### POST `/api/auth/login`

Used to authenticate an existing user.

Example request:

```json
{
  "email": "vishal@example.com",
  "password": "password123"
}
```

Successful login returns an authentication token.

---

# 📂 Current Project Structure

```text
shopsphere-backend/
│
├── src/
│   ├── config/
│   │
│   ├── controllers/
│   │
│   ├── middleware/
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── authRoutes.js
│   │
│   ├── utils/
│   │
│   └── app.js
│
├── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

# ▶️ How to Run the Project

## 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

## 2. Enter the project

```bash
cd shopsphere-backend
```

## 3. Install dependencies

```bash
npm install
```

## 4. Configure environment variables

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## 5. Start development server

```bash
npm run dev
```

---

# 🧪 API Testing

APIs are tested using:

**Postman**

Tested scenarios include:

* Successful requests
* Invalid input
* Missing fields
* Duplicate users
* Invalid login credentials
* Authentication errors

---

# 📅 15-Day Development Plan

| Day    | Task                    | Status         |
| ------ | ----------------------- | -------------- |
| Day 1  | Project & Express Setup | ✅              |
| Day 2  | Authentication          | 🔵 In Progress |
| Day 3  | JWT Middleware          | ⏳              |
| Day 4  | Roles & Authorization   | ⏳              |
| Day 5  | Product Model           | ⏳              |
| Day 6  | Product CRUD APIs       | ⏳              |
| Day 7  | Search & Pagination     | ⏳              |
| Day 8  | Cart System             | ⏳              |
| Day 9  | Cart APIs               | ⏳              |
| Day 10 | Order System            | ⏳              |
| Day 11 | Order APIs              | ⏳              |
| Day 12 | Error Handling          | ⏳              |
| Day 13 | Validation & Security   | ⏳              |
| Day 14 | Testing & Bug Fixing    | ⏳              |
| Day 15 | Final Delivery          | ⏳              |

---

# 🎯 Project Goal

The final goal is to build a production-style e-commerce backend containing:

```text
Authentication
      ↓
Authorization
      ↓
Products
      ↓
Cart
      ↓
Orders
      ↓
Error Handling
      ↓
Validation & Security
      ↓
Testing
      ↓
Deployment
```

---

# 💡 Learning Approach

This project follows a real-world development workflow:

```text
Requirement
    ↓
Task / Ticket
    ↓
Development
    ↓
Testing
    ↓
Git Commit
    ↓
GitHub
    ↓
Pull Request
    ↓
Code Review
    ↓
Bug Fix
    ↓
Completion
```

The purpose is not only to build an application, but also to learn how a backend developer works in a professional remote development environment.

---

# 👨‍💻 Developer

**Vishal**

Junior Backend Developer
Node.js | Express.js | MongoDB | REST API
