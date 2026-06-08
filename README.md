# Real-Time Chat Application
Live Demo: http://16.171.25.155:5000

A modern full-stack real-time chat application built using React, Node.js, Express.js, MongoDB Atlas, and Socket.IO. The application enables users to communicate instantly through real-time messaging with secure authentication and an intuitive user interface.

## Features

* User Authentication (Login & Signup)
* JWT-Based Authentication
* Real-Time Messaging with Socket.IO
* Online User Status
* One-to-One Chat System
* Secure Cookie Authentication
* Responsive User Interface
* MongoDB Atlas Integration
* REST API Architecture

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Zustand

### Backend

* Node.js
* Express.js
* Socket.IO

### Database

* MongoDB Atlas
* Mongoose

### Authentication

* JWT (JSON Web Token)
* Cookie Parser
* bcryptjs

### Tools

* Git & GitHub
* VS Code
* Postman

## Project Structure

```text
Real-Time-Chat-App/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── socket/
│   └── server.js
│
├── package.json
└── README.md
```
## Environment Variables

Create a `.env` file in the project root and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

### Example

```env
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/database_name
JWT_SECRET=your_secure_secret_key
```
> Note: Never commit your `.env` file or expose database credentials, API keys, or secrets in public repositories.

## Security

* Credentials are managed using environment variables.
* Sensitive configuration is excluded from version control using `.gitignore`.
* JWT-based authentication is used for securing user sessions.
* Passwords are hashed using bcrypt before storage.

## About

A full-stack real-time chat application that allows users to connect and exchange messages instantly using WebSockets. The project demonstrates authentication, REST APIs, real-time communication, state management, and MongoDB integration in a production-style MERN stack application.
