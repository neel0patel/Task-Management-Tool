// import mongoose
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose"); // Added by gillskiiiiiiiii

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
TodoSchema.plugin(passportLocalMongoose); // Added by gillskiiiiiiiii

const Todo = mongoose.model("Todo", TodoSchema);

// export
module.exports = Todo;
