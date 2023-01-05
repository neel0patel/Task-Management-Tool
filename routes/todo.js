// import express and initializing router
const express = require("express");
const router = express.Router();

// importing methods for CRUD operations
const {
  getAllTodo,
  postCreateTodo,
  putUpdateTodo,
  deleteTodo,
} = require("../controllers/todo");

// GET method to read all the todo's
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTodo); // added methods to end points

// POST method to create a new todo
/**
 * @route POST api/todo
 * @description get all todo
 * @access public
 */
router.post("/", postCreateTodo); // added methods to end points

// PUT method to update a exisiting todo
/**
 * @route PUT api/todo/:id
 * @description update a todo
 * @access public
 */
router.put("/:id", putUpdateTodo); // added methods to end points

// DELETE method to delete a exisiting todo
/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id", deleteTodo); // added methods to end points

// export router
module.exports = router;
