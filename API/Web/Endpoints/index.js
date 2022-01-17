const express = require('express');

const MoviesEndpoint = require('./Movies');

const Router = express.Router();

Router.use('/movies', MoviesEndpoint);

module.exports = Router;