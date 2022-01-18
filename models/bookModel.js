const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A book must have a name"],
    trim: true,
  },
  description:{
    type:String,
    required:[true,"A book must have a description"],
    trim:true,
  },
  ISBN: {
    type: Number,
    required: [true, "A book must have an isbn"],
    unique: true,
  },
  author: {
    type: String,
    trim: true,
    required: [true, "A book must have a author"],
  },
  numberOfCopies: {
    type: Number,
    default: 0,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
