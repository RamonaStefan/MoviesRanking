const express = require('express');
const AddMovieCommandHandler = require('../../Commands/Movies/Handlers/AddMovieCommandHandler.js');
const {
    AddMovieCommand
} = require ('../../Commands/Movies/Models/AddMovieCommand.js');
const csv = require('csv-parser')
const fs = require('fs')

const Router = express.Router();

Router.post('/', async (req, res) => {
    var answer = [];

    fs.createReadStream("/usr/src/app/movies.csv")
    .pipe(csv())
    .on('data', (row) => {
        answer.push(row)
    })
    .on('error', error => console.error(error))
    .on('end', () => {
        console.log('CSV file successfully processed');
        answer.forEach(async function(v) { 
            if(v.budget === "") 
            { 
                v.budget = "0";
            }
            const movieCommand = new AddMovieCommand(v);
            try {
                AddMovieCommandHandler.HandleAsync(movieCommand);
            } catch (err) {
                console.error(err);
                res.status(500).send("Something bad happened!");
            }
        });
        res.status(201).end();
    });
});

module.exports = Router;