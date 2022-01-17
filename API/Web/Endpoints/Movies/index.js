const express = require('express');

const AddMovieEndpoint = require('./AddMovie.js');
const AddUserEndpoint = require('./AddUser.js');
const AddReviewEndpoint = require('./AddReview.js');
const GetMoviesEndpoint = require('./GetMovies.js');
const GetWatchedMoviesEndpoint = require('./GetWatchedMovies.js');
const GetMoviesReviewEndpoint = require('./GetReviews.js');
const GetMovieByNameEndpoint = require('./GetMovieByName.js');
const GetMovieByGenreEndpoint = require('./GetMovieByGenre.js');
const GetMovieByCompanyEndpoint = require('./GetMovieByCompany.js');
const GetMovieByDirectorEndpoint = require('./GetMovieByDirector.js');
const GetMovieByStarEndpoint = require('./GetMovieByStar.js');
const GetMovieByWriterEndpoint = require('./GetMovieByWriter.js');
const PopulateDBEndpoint = require('./PopulateDB.js');


const Router = express.Router();

Router.use('/', AddMovieEndpoint);
Router.use('/user', AddUserEndpoint);
Router.use('/', GetMoviesEndpoint);
Router.use('/reviews', AddReviewEndpoint);
Router.use('/reviews', GetMoviesReviewEndpoint);
Router.use('/populate', PopulateDBEndpoint);
Router.use('/', GetMovieByNameEndpoint);
Router.use('/', GetMovieByGenreEndpoint);
Router.use('/', GetMovieByCompanyEndpoint);
Router.use('/', GetMovieByStarEndpoint);
Router.use('/', GetMovieByWriterEndpoint);
Router.use('/', GetMovieByDirectorEndpoint);
Router.use('/watched', GetWatchedMoviesEndpoint);


module.exports = Router;