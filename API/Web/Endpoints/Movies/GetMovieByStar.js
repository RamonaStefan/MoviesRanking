const express = require('express');

const GetMovieByStarQueryHandler = require('../../Queries/Movies/Handlers/GetMovieByStarQueryHandler.js');

const Router = express.Router();

Router.get('/star/:star/', async (req, res) => {

    var star = req.params.star;
    console.info(`Forwarding request for get movie with ${star} ...`);

    try {
        var movie = await GetMovieByStarQueryHandler.QueryAsync(star);
        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = Router;