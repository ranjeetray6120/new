# Sports Adda MVP Application

A premium, highly polished Sports eCommerce MVP built using Next.js 15 (App Router), NestJS 11, TypeScript, Tailwind CSS, SQLite, and Prisma ORM.

## Project Structure

```
sports-adda-mvp/
├── backend/                  # NestJS 11 API Backend
│   ├── prisma/
│   │   ├── schema.prisma     # SQLite Schema
│   │   └── seed.ts           # Admin Seeder Script
│   ├── src/
│   │   ├── auth/             # JWT Authentication Modules
│   │   ├── users/            # Users queries (Prisma lookup)
│   │   ├── dashboard/        # Dashboard Stats Endpoint
│   │   ├── prisma/           # Database service configuration
│   │   ├── common/           # Custom Filters (Http Exception Filter)
│   │   ├── app.module.ts
│   │   └── main.ts           # Swagger, CORS, and Validation Bootstrap
│   ├── tsconfig.json
│   └── package.json
├── frontend/                 # Next.js 15 App Router Frontend
│   ├── public/
│   │   └── images/           # High-Quality Mockup Product Images
│   ├── src/
│   │   ├── app/
│   │   │   ├── login/        # Login Form & Verification
│   │   │   ├── register/     # Registration Form & Verification
│   │   │   ├── dashboard/    # Protected Admin Layout & Dashboard Cards
│   │   │   ├── globals.css   # Glassmorphism Design System Styles
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx      # Landing Home Page
│   │   ├── components/       # Reusable components (Navbar, Footer, ProductCard)
│   │   ├── context/          # Global Auth Provider (AuthContext)
│   │   └── utils/            # apiRequest fetching utility
│   ├── tsconfig.json
│   └── package.json
└── README.md                 # Setup Instructions
```

---

## 🛠️ Step-by-Step Setup Instructions

> [!IMPORTANT]
> **Execution/testing required — please run these steps manually.**  
> In compliance with security restrictions, no local servers, dev servers, or migration pipelines have been triggered. Follow the commands below to launch the applications.

### 1. Prerequisites
Ensure you have **Node.js (v18+)** and **npm** installed on your system.

---

### 2. Backend Setup (NestJS)

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a file named `.env` in the `backend/` folder (or use the pre-generated one):
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="sportsadda_secret_key_1234567890"
   PORT=5000
   ```

4. **Generate Prisma Client & Run Migrations**:
   Run the following commands to create the SQLite database (`dev.db`) and build tables:
   ```bash
   npx prisma migrate dev --name init
   ```

5. **Seed the Admin User**:
   Seed the database with the default superuser credentials:
   ```bash
   npm run prisma:seed
   ```

6. **Start the NestJS Dev Server**:
   ```bash
   npm run start:dev
   ```
   *The backend will boot up at **`http://localhost:5000`**.*

7. **Verify API Docs (Swagger)**:
   Open your browser and navigate to:
   **`http://localhost:5000/api/docs`** to interact with the Swagger API console.

---

### 3. Frontend Setup (Next.js)

1. **Navigate to the frontend directory**:
   ```bash
   cd ../frontend
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables**:
   Create a `.env.local` inside the `frontend/` directory (pointing to the backend PORT):
   ```env
   NEXT_PUBLIC_API_URL="http://localhost:5000"
   ```

4. **Start the Next.js Dev Server**:
   ```bash
   npm run dev
   ```
   *The client application will start at **`http://localhost:3000`**.*

---

## 🔑 Demo Access Credentials

Use the seeded admin details below to test dashboard portals:

* **Email**: `admin@sportsadda.com`
* **Password**: `Admin@123`

---

## 🛰️ API Documentation Index

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/auth/login` | Public | Authenticates credentials and returns a JWT access token |
| **POST** | `/auth/register` | Public | Registers a new user account and returns account information |
| **GET** | `/auth/profile` | Protected | Fetches currently authenticated user profile |
| **GET** | `/dashboard/stats` | Protected | Retrieves admin stats (`totalProducts`, `totalCategories`, `totalBrands`) |

---

## ✨ Features & Architecture Highlights

* **Next.js 15 App Router**: Modern file-system structure with nested layouts and client/server rendering optimization.
* **Authentication Gate**: All routes under `/dashboard/*` are protected using a centralized React context (`AuthContext.tsx`) that validates tokens and handles redirection.
* **NestJS Clean Separation**: Fully modular architecture (`auth`, `users`, `dashboard`, `prisma`) that ensures scalability and clean code.
* **SQLite & Prisma**: Zero-config relational database with typed database queries and automated schema migrations.
* **Premium Glassmorphism Theme**: Curated dark theme (`#07080a`) with glowing sports-orange primary accents (`#ff4e00`), customized interactive hover cards, and smooth scrollbars.
* **Swagger OpenAPI**: Complete, interactive schema models and controllers loaded automatically at launch.
