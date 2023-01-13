const User = require("../models/user");
const Todo = require("../models/todo");

// createUser method will create a new user
exports.createUser = (req, res) => {
  console.log(req.body);
  User.create(req.body)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: "Failed to create user", error: err.message });
    });
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
