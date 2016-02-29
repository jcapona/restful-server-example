/**
  Book Controller file
*/

var Book = require('../models/Book.js');

// Inserts a book to the db
exports.create = function(req, res){
  var book = new Book.BookModel({
    title: req.body.title,
    author: req.body.author,
    isbn: req.body.isbn,
    year: req.body.year,
    editorial: req.body.editorial,
    summary: req.body.summary
  }).save(function(err, book) {
    if(err) 
      res.status(500).send(err.message);
    res.json(book);
  });
};

// Finds a book in the db
exports.readOne = function (req, res) {
  if(req.params.id === undefined)
    return res.status(400).send({});
  
  Book.BookModel.findOne({_id: req.params.id}, function(err, book) {
    if(err)
      return res.status(500).send(err.message);
    return res.json(book);
  }); 
};

// Finds all books in the db
exports.readAll = function (req, res) {
  Book.BookModel.find(function(err, books) {
    if(err)
      return res.status(500).send(err.message);
    return res.json(books);
  });
};

// Updates a book from the db
exports.update =  function(req, res) {
  if(req.params.id === undefined)
    return res.status(400).send({});

  Book.BookModel.findById(req.params.id, function(err, book) {
    if(err)
      return res.status(500).send(err.message);

    if(req.body.title !== undefined)
      book.title = req.body.title;
    if(req.body.author !== undefined)
      book.author = req.body.author;
    if(req.body.isbn !== undefined)
      book.isbn = req.body.isbn;
    if(req.body.year !== undefined)
      book.year = req.body.year;
    if(req.body.editorial !== undefined)
      book.editorial = req.body.editorial;
    if(req.body.summary !== undefined)
      book.summary = req.body.summary;

    book.save(function(err) {
      if(err)
        return res.status(500).send(err.message);
      else
        return res.json(book);
    });
  });
};

// Deletes a book from the db
exports.delete = function(req, res) {
  if(req.params.id === undefined)
    return res.status(400).send({});
  
  Book.BookModel.findById(req.params.id, function(err, book) {
    if(err)
      return res.status(500).send(err.message);
    book.remove(function(err) {
      if(err)
       return res.send(500, err.message);
      res.status(200).send({});
    })
  });
};