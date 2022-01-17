const express = require('express');

const GetWatchedMoviesQueryHandler = require('../../Queries/Movies/Handlers/GetWatchedMoviesQueryHandler.js');

const Router = express.Router();

Router.get('/user/:user/', async (req, res) => {
    
    var user = req.params.user;
    try {
        var movies = await GetWatchedMoviesQueryHandler.QueryAsync(user);
        res.json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;