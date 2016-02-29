/**
  Model file of a Book
*/

var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({  
  title: { type: String, required: true },
  author: { type: String, required: true },
  isbn: { type: String, required: true },
  pages: { type: Number },
  summary: { type: String }
});

var Book = mongoose.model("books", BookSchema);

module.exports = {
  BookModel: Book
};