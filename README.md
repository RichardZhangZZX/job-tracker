# Job Tracker App

A fullstack job application tracker to help manage your job search process.

## Features

- Track job applications with company, role, dates, status, and notes
- View all applications in a table format
- Edit and delete job entries
- Clean, responsive UI built with React and Tailwind CSS

## Tech Stack

**Frontend:**
- React 19 with TypeScript
- Tailwind CSS for styling
- React Router for navigation
- Axios for API calls

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- RESTful API design

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
cd frontend && npm install
```

3. Set up your MongoDB connection in `backend/config/db.js`

4. Start the development servers:
```bash
# Backend (from root directory)
npm run dev

# Frontend (in new terminal)
cd frontend && npm run dev
```

The backend runs on `http://localhost:3000` and frontend on `http://localhost:5173`.

## API Endpoints

- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/:id` - Get single job
- `POST /api/jobs` - Create new job
- `PUT /api/jobs/:id` - Update job
- `DELETE /api/jobs/:id` - Delete job