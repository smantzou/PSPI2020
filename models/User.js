const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    adminstatus : {
      type : Boolean
    },default : false,
    calories: [
      {
        date: {
          type: String,
        },
        total: {
          type: Number,
        },
      },
    ],
    default: [],
   
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
