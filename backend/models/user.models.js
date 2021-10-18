const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    name: {
      type: String,
      // required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    }},
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("myusers", User);
