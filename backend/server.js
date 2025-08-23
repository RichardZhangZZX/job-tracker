import express from 'express';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js"; 
import jobRoutes from "./routes/job.route.js";
import cors from 'cors';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json()); // allow us to accept JSON data in the req.body
 
app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use("/api/jobs", jobRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});
 
