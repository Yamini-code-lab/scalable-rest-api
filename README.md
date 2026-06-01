# Scalable REST API with Authentication & Role-Based Access Control

## Overview

This project is a full-stack application that demonstrates a scalable backend architecture with authentication, authorization, and CRUD functionality, along with a basic React frontend for testing and interaction.

The system implements secure user authentication using JWT, role-based access control, and a task management module. It also includes API documentation, validation, and security best practices.

---

## Features

### Backend Features

- User registration and login system
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (User / Admin)
- Protected routes using middleware
- CRUD operations for Task entity
- Input validation using express-validator
- Centralized error handling middleware
- API versioning (`/api/v1`)
- API documentation using Swagger
- Security middleware (Helmet, CORS)
- Rate limiting for API protection

---

### Frontend Features

- React-based UI
- User registration and login pages
- JWT-based session handling using localStorage
- Protected dashboard route
- Task management (Create, Read, Delete)
- API integration using Axios
- Basic error and success handling

---

## Tech Stack

### Backend
- Node.js
- Express.js
- MySQL
- JWT (jsonwebtoken)
- bcryptjs
- express-validator
- swagger-ui-express
- helmet
- cors
- express-rate-limit

### Frontend
- React (Vite)
- Axios
- React Router DOM

---

## Project Structure

backend/
│── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ │ └── v1/
│ ├── middleware/
│ ├── config/
│ ├── utils/
│ ├── app.js
│ └── server.js

frontend/
│── src/
│ ├── pages/
│ ├── routes/
│ ├── services/
│ ├── App.jsx
│ └── main.jsx

API Endpoints
Auth Routes
POST /api/v1/auth/register – Register user
POST /api/v1/auth/login – Login user
Task Routes (Protected)
POST /api/v1/tasks – Create task
GET /api/v1/tasks – Get all tasks
GET /api/v1/tasks/:id – Get task by ID
PUT /api/v1/tasks/:id – Update task
DELETE /api/v1/tasks/:id – Delete task (Admin/Owner protected)

Authentication Flow
1.User registers with name, email, and password
2.Password is hashed before storage
3.User logs in and receives a JWT token
4.Token is stored in localStorage on frontend
5.Token is sent in Authorization header for protected routes

Security Implementations
-Password hashing using bcrypt
-JWT authentication
-Role-based authorization
-Input validation for request safety
-CORS configuration for frontend communication
-Helmet for HTTP header security
-Rate limiting to prevent abuse

Scalability Considerations
-Modular folder structure (controllers, services, routes)
-API versioning implemented
-Middleware-based architecture
-Separation of concerns
-Ready for integration with Redis caching and Docker deployment
-Easily extensible for microservices architecture
