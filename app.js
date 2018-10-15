const express = require('express');
const mongoose = require('mongoose');
const server = express();
const compression = require('compression');
const PORT = 8000;
const morgan = require('morgan');
const bodyParser = require('body-parser');

const indexRoute = require('./server/routes/threads');

server.use(morgan('dev'));
server.use(compression());
server.use(bodyParser.json({ limit: '20mb' }));
server.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
server.use("/api", indexRoute);

mongoose.connect('mongodb://localhost:27017/mockup-imageboard');

server.listen(PORT, () => console.log(`Web Server running on port ${PORT}`));
