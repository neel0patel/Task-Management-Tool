// import Todo model from models/todo
const Todo = require("../models/todo");

// getAllTodo will return the todo's in the collection,if empty,it'll return a 404 error
exports.getAllTodo = (req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) =>
      res.status(404).json({ message: "Task not found", error: err.message })
    );
};

//postCreateTodo will use the create() method to create a todo and return a success message, otherwise it'll return a 400 error
exports.postCreateTodo = (req, res) => {
  Todo.create(req.body)
    .then((data) => res.json({ message: "Task added successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to add task", error: err.message })
    );
};

//putUpdateTodo will update an existing todo by using findByIdAndUpdate() method and target the id which will be extracted using req.params.id
exports.putUpdateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) => res.json({ message: "Task updated successfully", data }))
    .catch((err) =>
      res
        .status(400)
        .json({ message: "Failed to update task", error: err.message })
    );
};

//deleteTodo will remove an already exisiting todo using findByIdAndRemove() method
exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id, req.body)
    .then((data) => res.json({ message: "Task successfully deleted", data }))
    .catch((err) =>
      res.status(404).json({ message: "Not found", error: err.message })
    );
};
