const express = require('express');

const GetMovieByNameQueryHandler = require('../../Queries/Movies/Handlers/GetMovieByNameQueryHandler.js');

const Router = express.Router();

Router.get('/name/:name/', async (req, res) => {

    var name = req.params.name;
    console.info(`Forwarding request for get movie ${name} ...`);

    try {
        var movie = await GetMovieByNameQueryHandler.QueryAsync(name);
        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = Router;