const mongoose = require("mongoose");
const express = require("express");

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: "String",
    // required: true,
  },
  email: {
    type: "String",
    // required: true,
  },
  password: {
    type: "String",
    // required: true,
  },
  todo: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;