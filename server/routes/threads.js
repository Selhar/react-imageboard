const express = require('express');
const router = express.Router();
const Thread = require('../models/thread');

router.get('/', (req, res) => {
  Thread.find({}, (error, threads) => {
    if(error) return res(error);
    res.json(threads);
  })
});

router.post('/thread', (req, res) => {
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
    {$push: {replies: {text: req.body.text, password: req.body.password}}},
    {safe: true, upsert: true, new : true},
    (err) => {
      if(err) console.log(err);
    }
);
  res.redirect(req.originalUrl)
});

module.exports = router;
