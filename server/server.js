const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const  connectDB  = require("./config/db");
const timerRoutes = require("./route/timerRoute");

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/timer", timerRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));