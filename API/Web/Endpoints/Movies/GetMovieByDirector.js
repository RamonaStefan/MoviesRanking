const express = require('express');

const GetMovieByDirectorQueryHandler = require('../../Queries/Movies/Handlers/GetMovieByDirectorQueryHandler.js');

const Router = express.Router();

Router.get('/director/:director/', async (req, res) => {

    var director = req.params.director;
    console.info(`Forwarding request for get movie directed by ${director} ...`);

    try {
        var movie = await GetMovieByDirectorQueryHandler.QueryAsync(director);
        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = Router;