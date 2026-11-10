
import express from "express";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Movie API server is running"
    });
});

// Movie API routes
app.use("/api/v1/movie", movieRoutes);

// Start server after successful MongoDB connection
const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 8000;

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });

    } catch (error) {
        console.error("Server startup failed:", error.message);
        process.exit(1);
    }
};

startServer();
