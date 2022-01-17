const express = require('express');

const GetMovieByGenreQueryHandler = require('../../Queries/Movies/Handlers/GetMovieByGenreQueryHandler.js');

const Router = express.Router();

Router.get('/genre/:genre/', async (req, res) => {

    var genre = req.params.genre;
    console.info(`Forwarding request for get movie ${genre} ...`);

    try {
        var movie = await GetMovieByGenreQueryHandler.QueryAsync(genre);
        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = Router;