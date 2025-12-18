// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectdb = require("./config/db");
const productRoute = require("./routes/productRoute");
const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectdb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", productRoute);

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
