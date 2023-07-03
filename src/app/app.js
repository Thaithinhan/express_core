const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

//Middelware
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

//database

//route
app.get('/', (req, res) => {
  res.status(200).send('Hello world!');
});

//handle error

module.exports = app;
