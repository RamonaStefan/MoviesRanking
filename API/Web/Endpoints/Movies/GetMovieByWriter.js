const express = require('express');

const GetMovieByWriterQueryHandler = require('../../Queries/Movies/Handlers/GetMovieByWriterQueryHandler.js');

const Router = express.Router();

Router.get('/writer/:writer/', async (req, res) => {

    var writer = req.params.writer;
    console.info(`Forwarding request for get movie written by ${writer} ...`);

    try {
        var movie = await GetMovieByWriterQueryHandler.QueryAsync(writer);
        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = Router;