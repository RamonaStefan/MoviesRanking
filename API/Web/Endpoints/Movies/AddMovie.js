const express = require('express');

const AddMovieCommandHandler = require('../../Commands/Movies/Handlers/AddMovieCommandHandler.js');
const {
    AddMovieCommand
} = require ('../../Commands/Movies/Models/AddMovieCommand.js');

const Router = express.Router();

Router.post('/', async (req, res) => {
    
    const movieCommand = new AddMovieCommand(req.body);
    try {
        AddMovieCommandHandler.HandleAsync(movieCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;