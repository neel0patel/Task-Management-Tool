const User = require("../models/user");
const Todo = require("../models/todo");
const passport = require("passport");
const { Router } = require("express");
const { resolveShowConfigPath } = require("@babel/core/lib/config/files");

// createUser method will create a new user
// exports.createUser = (req, res) => {
//   console.log(req.body);
//   User.create(req.body)
//     .then((data) => {
//       res.json(data);
//     })
//     .catch((err) => {
//       res
//         .status(400)
//         .json({ message: "Failed to create user", error: err.message });
//     });
// };
exports.createUser = (req, res) => {
  const Users = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.pass,
  });

  User.register(Users, req.body.pass, function (err, user) {
    if (err) {
      res.setHeader("Content-Type", "application/json");
      res.status(500).json({
        success: false,
        message: "Your account could not be created. Error: ",
        err,
      });
    } else {
      passport.authenticate(
        "local",
        (req,
        res,
        () => {
          res.setHeader("Content-Type", "application/json");
          res
            .status(200)
            .json({ success: true, message: "Your acocunt has been saved" });
        })
      );
    }
  });
};

exports.loginUser = (req, res) => {
  console.log(req.body);
  if (!req.body.username) {
    res.json({ success: false, message: "Username was not given" });
  } else if (!req.body.pass) {
    res.json({ success: false, message: "Password was not given" });
  } else {
    passport.authenticate("local", function (err, user, info) {
      console.log(user);
      if (err) {
        res.json({
          success: false,
          message: "Your account could not be saved. Error: " + err,
        });
      } else {
        if (!user) {
          res.json({ success: false, message: "Username incorrect." });
        } else {
          const token = jwt.sign(
            { userId: user.id, username: user.username },
            "Super Secret",
            { expiresIn: "24h" }
          );
          res.setHeader("Content-Type", "application/json");
          res.status(200).json({
            user,
            success: true,
            message: "Authentication successful",
            token: token,
          });
        }
      }
    })(req, res);
  }
};

// createTodo method will create and save a new task, use the userId to locate the user & update new task array w/ ObjectId of new task
exports.createTodo = (req, res) => {
  // grabbing userId
  const { userId } = req.params;

  // creating the task
  const newTodo = new Todo(req.body);
  //saving it
  newTodo.save();

  User.findByIdAndUpdate(
    userId,
    { $push: { todo: newTodo._id } },
    { new: true, upsert: true },
    (err, user) => {
      if (err) {
        res.status(400).json({ message: "error" });
      }
      res.json(user);
    }
  );
};

// getUser will get the user details

exports.getUser = (req, res) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((data) => res.json(data))
    .catch((err) =>
      res.status(400).json({ message: "User not found", error: err.message })
    );
};

// getAllTodo method will use userId to find the user then populate the method
exports.getAllTodo = (req, res) => {
  // grabbing userId
  const { userId } = req.params;

  User.findByIdAndUpdate(userId)
    .populate("todo")
    .exec((err, user) => {
      if (err) {
        res.status(400).json({
          message: "failed to populate",
          error: err.message,
        });
      }
      res.json(user);
    });
};
