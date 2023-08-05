const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const noteSchema = mongoose.Schema(
  {
      title: {
      type: String,
      required: [true, "Please provide a title"], 
    },
    description:{
        type: String,
      required: [true, "description please"],  
    }
  },
  {
    timestamps: true,
  }
);
const Note = mongoose.model("Note", noteSchema);
module.exports = Note;
