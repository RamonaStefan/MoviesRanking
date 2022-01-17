const express = require('express');

const GetMoviesQueryHandler = require('../../Queries/Movies/Handlers/GetMoviesQueryHandler.js');

const Router = express.Router();

Router.get('/', async (req, res) => {
    
    try {
        var movies = await GetMoviesQueryHandler.QueryAsync();
        res.json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;