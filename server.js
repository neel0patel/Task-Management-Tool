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

// Added by gillskiiiiiiiii

const User = require("./models/user");
const passport = require("passport");
const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;
var jwt = require("jsonwebtoken");

app.use(
  session({
    name: "session-id",
    secret: "123-456-789",
    saveUninitialized: false,
    resave: false,
    cookie: {
      express: "24h",
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

exports.verifyUser = passport.authenticate("jwt", { session: false });
