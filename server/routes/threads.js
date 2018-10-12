const express = require('express');
const router = express.Router();
const Thread = require('../models/thread');
const cuid = require('cuid');

router.get('/', function(req, res, next) {
  Thread.find({}, (error, threads) => {
    if(error) return res(error);
    res.json(threads);
  })
});

router.post('/', function(req, res, next) {
  let thread = new Thread({
    author:       req.body.author,
    title:        req.body.title,
    description:  req.body.description,
    category:     req.body.category,
    cuid:         cuid()
  });
  thread.save((error) => {
    if (error){
      res.send(error);
    }
    res.end(thread.author);
  })
});

module.exports = router;
