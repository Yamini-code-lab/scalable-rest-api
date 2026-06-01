📌 Project Title
Scalable REST API with Auth & RBAC

📌 Tech Stack
Node.js, Express, MySQL, JWT, React, Swagger

📌features
- User registration & login
- JWT authentication
- Role-based access control
- Task CRUD
- Input validation
- Swagger API docs
- Rate limiting & security middleware

📌 Setup Instructions
git clone <repo>
cd backend
npm install

*Create .env:*

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=****
DB_NAME=your_db
JWT_SECRET=secret

*Run backend:*

npm run dev

*Run frontend:*

cd frontend
npm install
npm run dev

📌 API Endpoints
POST /api/v1/auth/register
POST /api/v1/auth/login

GET /api/v1/tasks
POST /api/v1/tasks
PUT /api/v1/tasks/:id
DELETE /api/v1/tasks/:id

📌 Swagger
http://localhost:5000/api-docs
