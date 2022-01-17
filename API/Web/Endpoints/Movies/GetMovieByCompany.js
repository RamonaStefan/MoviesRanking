const express = require('express');

const GetMovieByCompanyQueryHandler = require('../../Queries/Movies/Handlers/GetMovieByCompanyQueryHandler.js');

const Router = express.Router();

Router.get('/company/:company/', async (req, res) => {

    var company = req.params.company;
    console.info(`Forwarding request for get movie made by ${company} ...`);

    try {
        var movie = await GetMovieByCompanyQueryHandler.QueryAsync(company);
        res.json(movie);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = Router;