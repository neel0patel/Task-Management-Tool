const express = require("express");

const router = express.Router();

const {
  createUser,
  loginUser,
  createTodo,
  getUser,
  getAllTodo,
} = require("../controllers/user");

/**
 * @route POST /api/user/create
 * @description create user
 */
router.post("/create", createUser);

/**
 * @route POST /api/user/login
 * @description login user
 */
router.post("/login", loginUser);

/**
 * @route POST /api/todo/:userId
 * @description add todo ObjectId to users todo array
 */
router.post("/todo/:userId", createTodo);

/**
 * @route GET /api/:userId
 * @description get user details
 */
router.get("/:userId", getUser);

/**
 * @route GET /api/get-all/:userId
 * @description populate todo schema
 */
router.get("/todo/:userId", getAllTodo);

module.exports = router;
