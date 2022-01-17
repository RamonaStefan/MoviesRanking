const express = require('express');

const AddUserCommandHandler = require('../../Commands/Movies/Handlers/AddUserCommandHandler.js');
const {
    AddUserCommand
} = require ('../../Commands/Movies/Models/AddUserCommand.js');

const Router = express.Router();

Router.post('/', async (req, res) => {
    
    const userCommand = new AddUserCommand(req.body);
    try {
        AddUserCommandHandler.HandleAsync(userCommand);
        res.status(201).end();
    } catch (err) {
        console.error(err);
        res.status(500).send("Something bad happened!");
    }
});

module.exports = Router;