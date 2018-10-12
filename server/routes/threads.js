const express = require('express');
const router = express.Router();
const Thread = require('../models/thread');
const ObjectId = require('mongodb').ObjectID;

router.get('/', res => {
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
    res.redirect('/');
  })
});

router.post('/reply', (req, res) => {
  let thread = Thread.findByIdAndUpdate(id, {
    $push: {
      replies: {
        text: text,
        _id: new ObjectId(),
      }
    }
  })
  thread.save(error => {
    if (error){
      res.send(error);
    }
    res.redirect('/');
  })
});

module.exports = router;
