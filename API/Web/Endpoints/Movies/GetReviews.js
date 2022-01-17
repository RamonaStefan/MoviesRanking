const express = require('express');

const GetReviewsQueryHandler = require('../../Queries/Movies/Handlers/GetReviewsQueryHandler.js');

const Router = express.Router();

Router.get('/', async (req, res) => {

    try {
        var reviews = await GetReviewsQueryHandler.QueryAsync();
        res.json(reviews);
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;