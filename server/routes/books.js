var express = require('express');
var router = express.Router();
var Book = require('../models/books');
var cuid = require('cuid');
const categories = require('../constants/models');

router.get('/', function(req, res, next) {
  Book.find({}, (error, books) => {
    if(error) return res(error);
    res.json(books);
  })
});

router.post('/', function(req, res, next) {
  let book = new Book({
    author:       req.body.author,
    title:        req.body.title,
    description:  req.body.description,
    category:     req.body.category,
    cuid:         cuid()
  });
  book.save((error) => {
    if (error){
      res.send(error);
    }
    res.end(book.author);
  })
});

module.exports = router;
