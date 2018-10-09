const express = require('express');
const mongoose = require('mongoose');
const server = express();
const compression = require('compression');
const PORT = 8000;
const { connection, Schema } = mongoose

const morgan = require('morgan'); //remove
const bodyParser = require('body-parser');

const indexRoute = require('./server/routes/books');

server.use(morgan('dev')); //remove
server.use(compression());
server.use(bodyParser.json({ limit: '20mb' }));
server.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
server.use("/books", indexRoute);

mongoose.connect('mongodb://localhost:27017/test');

server.listen(PORT, () => console.log(`Web Server running on port ${PORT}`));
