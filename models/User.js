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
      type : Boolean,
      default : false
    },
    gender : {
      type : String,
      default : "Unknown"
    },
    age : {
      type : Number,
      default : 0
    },
    height : {
      type : Number,
      default : 0
    },
    weight : {
      type : Number,
      default : 0
    },
    firstTimer : {
      type : Boolean,
      default : true
    },
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
