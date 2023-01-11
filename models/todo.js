// import mongoose
const mongoose = require("mongoose");

const { Schema } = mongoose;

// create schema called TodoSchema with fields of title(mandatory) and description
const TodoSchema = new mongoose.Schema({
  title: {
    type: "String",
    // required: true,
  },
  description: {
    type: "String",
  },
});

const Todo = mongoose.model("Todo", TodoSchema);

// export
module.exports = Todo;
