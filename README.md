Sweet Shop Management System
A full-stack Sweet Shop Management System built as a TDD kata for placement assessment. It provides a RESTful backend API with JWT authentication and a React single-page application (SPA) frontend to manage sweets inventory.

Features
User registration and login with JWT-based authentication.

Protected sweets API:
Add, list, search, update, delete sweets (admin-only for write/delete).
Purchase sweets (decreases quantity, blocked when quantity is zero).
Restock sweets (admin-only).

React SPA frontend:
Login page.
Dashboard showing all sweets and allowing purchase.
Admin page to create new sweets.
Tech Stack

Backend: Node.js, Express, SQLite (Sequelize ORM), JSON Web Tokens (JWT).

Frontend: React, Vite, Axios, React Router.

Tools: Git, npm, Postman/REST client for testing.

Getting Started
1. Clone the repository
bash
git clone https://github.com/sarang1708/sweet-shop-management.git
cd sweet-shop-management
2. Backend setup
bash
cd backend
npm install
npm run dev
Server runs at http://localhost:4000.

SQLite database file sweetshop.sqlite is created automatically via Sequelize sync.

Important backend endpoints
Auth:
POST /api/auth/register – register user (name, email, password, optional role).
POST /api/auth/login – login and receive { token, role }.
Sweets (JWT required in Authorization: Bearer <token>):
POST /api/sweets – create sweet (admin).
GET /api/sweets – list all sweets.
GET /api/sweets/search – search by name/category/price range.
PUT /api/sweets/:id – update sweet (admin).
DELETE /api/sweets/:id – delete sweet (admin).
POST /api/sweets/:id/purchase – purchase sweet (decrease quantity, blocked at 0).
POST /api/sweets/:id/restock – restock sweet (admin).

3. Frontend setup
Open a new terminal:
bash
cd sweet-shop-management/frontend
npm install
npm run dev
Frontend runs at http://localhost:5173 by default.

4. Usage Flow
Create an admin user (once):
Send POST /api/auth/register with body:
json
{
  "name": "Admin",
  "email": "admin@example.com",
  "password": "admin123",
  "role": "ADMIN"
}
Login from the React app at http://localhost:5173/login using the admin credentials.

Dashboard (/):
View all sweets, see their quantity and price.
Purchase sweets; quantity decreases and the button is disabled when quantity reaches zero.

Admin page (/admin):
Create new sweets (name, category, price, quantity).
(Optional extensions) Update and delete sweets via API.
Tests and Verification

Backend:
Manual tests done via Postman/REST client for all major flows: register, login, create sweet, list sweets, purchase, restock, admin protection, and token validation.

Frontend:
Manual tests for login flow, dashboard loading from API, purchase flow, and admin sweet creation.
(If you add Jest tests later, update this section with npm test commands and results.)

Screenshots

Login page
Dashboard with sweets and purchase button
Admin page creating a sweet

My AI Usage
This project was implemented with the help of AI tools, as encouraged by the kata.
Tools used: Perplexity/ChatGPT (and any others you actually used, e.g. GitHub Copilot).

How AI was used:
Brainstorming and refining the backend/frontend architecture (folder structure, API design).
Generating initial boilerplate for Express routes, controllers, Sequelize models, and React components.
Debugging errors in Node, React, and Git commands.
Suggesting edge cases and improvements to follow the assignment’s requirements (JWT auth, protected routes, admin role, purchase disabling at zero).

Reflection:
AI significantly sped up setup and reduced syntax/boilerplate mistakes, allowing more focus on understanding flows and connecting backend with frontend.
All generated code was read, tested, and adapted to fit the exact Sweet Shop kata requirements and the final repository structure.
