const express = require('express');

const AddMovieReviewCommandHandler = require('../../Commands/Movies/Handlers/AddMovieReviewCommandHandler.js');
const {
    AddMovieReviewCommand
} = require ('../../Commands/Movies/Models/AddMovieReviewCommand.js');

const Router = express.Router();

Router.post('/', async (req, res) => {

    const movieReviewCommand = new AddMovieReviewCommand(req.body);
    try {
        AddMovieReviewCommandHandler.HandleAsync(movieReviewCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;