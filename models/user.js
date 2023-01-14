const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose"); // Added by gillskiiiiiiiii

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  username: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  todo: [{ type: Schema.Types.ObjectId, ref: "Todo" }],
});

UserSchema.plugin(passportLocalMongoose); // Added by gillskiiiiiiiii

const User = mongoose.model("User", UserSchema);

module.exports = User;
