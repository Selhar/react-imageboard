var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
  author: { type: 'String', required: true },
  title: { type: 'String', required: true },
  description: { type: 'String', required: true },
  category: { type: 'String', required: true },
  cuid: { type: 'String', required: true },
  dateAdded: { type: 'Date', default: Date.now, required: true },
});

module.exports = mongoose.model('Post', booksSchema);
