// import express and initializing router
const express = require("express");
const router = express.Router();

// GET method to read all the task
/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/");

// POST method to create a new task
/**
 * @route POST api/todo
 * @description get all todo
 * @access public
 */
router.post("/");

// PUT method to update a exisiting task
/**
 * @route PUT api/todo/:id
 * @description update a todo
 * @access public
 */
router.put("/:id");

// DELETE method to delete a exisiting task
/**
 * @route DELETE api/todo/:id
 * @description delete todo
 * @access public
 */
router.delete("/:id");

// export router
module.exports = router;
