# Job Tracker App

A fullstack job application tracker to help manage your job search process.

**For a complete video walkthrough of the setup process, see the demo video below.**

[![Demo Video](https://img.shields.io/badge/Demo-Video-red?logo=youtube)](https://drive.google.com/file/d/1S1YbDHl6EpdkUO-PYSGsHTWskUt7Sjz1/view?usp=sharing)

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
- Node.js (v14 or higher)
- MongoDB Atlas account (free)

### MongoDB Atlas Setup

1. Create a free account at https://www.mongodb.com/atlas
2. Create a new project:
   - Click "New Project"
   - Give it a name (e.g., "Job Tracker")
   - Click "Next" and "Create Project"
3. Create a new cluster:
   - Click "Build a Database"
   - Choose the free M0 tier
   - Select a region close to you
   - Click "Create"
4. Create a database user:
   - Go to Database Access
   - Click "Add New Database User"
   - Choose password authentication
   - Save the username and password
5. Whitelist your IP address:
   - Go to Network Access
   - Click "Add IP Address"
   - Choose "Allow Access from Anywhere" for development
6. Get your connection string:
   - Go to Database > Connect
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user password

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
cd frontend && npm install
```

3. Set up your MongoDB connection in `backend/config/db.js`:
   - Replace `process.env.MONGO_URI` with your MongoDB Atlas connection string
   - Example: `mongoose.connect('mongodb+srv://username:password@cluster.abc123.mongodb.net/job-tracker?retryWrites=true&w=majority')`

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
