// import and initializing express and dotenv
require("dotenv").config();
const express = require("express");

// import connectDB method from config/db.js
const connectDB = require("./config/db");

const app = express();

// call the method
connectDB();

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running!"));

// setting up port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
