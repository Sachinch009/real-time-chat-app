# Real-Time Chat Application

Live Demo: http://16.171.25.155:5000

A full-stack real-time chat application built using React, Node.js, Express.js, MongoDB Atlas, and Socket.IO. The application enables users to communicate instantly through real-time messaging with secure JWT authentication, online user tracking, and Docker-based deployment.

---

## Features

* User Authentication (Login & Signup)
* JWT-Based Authentication
* Secure Cookie-Based Sessions
* Real-Time Messaging with Socket.IO
* Online User Tracking
* One-to-One Private Chat
* MongoDB Atlas Integration
* RESTful API Architecture
* Responsive UI
* Dockerized Frontend & Backend
* Docker Compose Support

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Zustand
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication

### Database

* MongoDB Atlas
* Mongoose

### Security

* JWT (JSON Web Token)
* Cookie Parser
* bcryptjs Password Hashing

### DevOps & Tools

* Docker
* Docker Compose
* Git & GitHub
* VS Code
* Postman

---

## Project Structure

```text
Real-Time-Chat-App/
│
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── socket/
│   └── server.js
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── package.json
└── README.md
```

## Environment Variables

Create a `.env` file in the project root.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Example

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
JWT_SECRET=your_secure_secret_key
```

> Never commit your `.env` file or expose secrets publicly.

---

## Local Development

### Backend

```bash
npm run server
```

Runs on:

```text
http://localhost:5000
```

### Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```text
http://localhost:3000
```

---

## Docker Setup

### Build and Run

```bash
docker compose up --build
```

Application URLs:

```text
Frontend: http://localhost:3000
Backend : http://localhost:5000
```

### Stop Containers

```bash
docker compose down
```

---

## Security

* Credentials are stored using environment variables.
* Sensitive files are excluded using `.gitignore`.
* Passwords are hashed using bcryptjs.
* JWT authentication protects user sessions.
* HTTP-only cookies help mitigate XSS attacks.

---

## Future Enhancements

* Group Chats
* Message Read Receipts
* Typing Indicators
* User Profile Management
* Media/File Sharing
* Theme Customization
