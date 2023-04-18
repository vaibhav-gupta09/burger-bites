import mongoose from "mongoose";
// var mongoose = require('mongoose');
// require('mongoose-type-email');

const schema = new mongoose.Schema({
  name:{type: String, required: true},
  email:{type: String, required: true},
  message:{type: String, required: true},
  user: {
     type: mongoose.Schema.ObjectId,
     ref: "User",
     required: true,
   },
  createdAt: {
    type: Date,
    default: Date.now,
   }
});

export const Message = mongoose.model("Message", schema);
