// import and initializing express, dotenv and cors
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// import connectDB method from config/db.js
const connectDB = require("./config/db");

const app = express();

// import routes
const user = require("./routes/user");
const todo = require("./routes/todo");

// call the method
connectDB();

// initializing cors to be used
app.use(cors({ origin: true, credentials: true }));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running!"));

// use the imported routes
app.use("/api/todo", todo);
app.use("/api/user", user);

// setting up port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
