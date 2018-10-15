const express = require('express');
const router = express.Router();
const Thread = require('../models/thread');
const ObjectId = require('mongodb').ObjectID;
const cuid = require('cuid');

router.get('/', (req, res) => {
  Thread.find({}, (error, threads) => {
    if(error) return res(error);
    res.json(threads);
  })
});

router.post('/', (req, res) => {
  let thread = new Thread({
    title:        req.body.title,
    text:         req.body.text,
    replies:      [],
  });
  thread.save(error => {
    if (error){
      res.send(error);
    }
    res.redirect(req.originalUrl);
  })
});

router.post('/reply', (req, res) => {
  Thread.findByIdAndUpdate(
    req.body.thread_id,
    {$push: {"replies": {text: req.body.text, password: req.body.password}}},
    {safe: true, upsert: true, new : true},
    function(err, model) {
        console.log(err);
    }
);
  res.redirect(req.originalUrl)
});

module.exports = router;
