const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;
const Schema = mongoose.Schema;
const cuid = require('cuid');

const Thread = new Schema({
  title:          { type: String },
  text:           { type: String, required: true },
  creation_date:  { type: Date, default: Date.now, required: true },
  password:       { type: String, default: cuid() },
  isReported:     { type: Boolean, default: false },
  id:             { type: Schema.Types.ObjectId, default: new ObjectId() },
  replies: [{
    text:       { type: String, required: true },
    password:   { type: String, default: cuid() },
    isReported: { type: Boolean, default: false }
  }]
});

module.exports = mongoose.model('Thread', Thread);
