const {
    ExecuteQuery
} = require('../../../../Infrastructure/Database');

const {
    MovieView
} = require('../Models/MovieView.js');

const QueryAsync = async () => {
    const result = await ExecuteQuery('SELECT * FROM movies ORDER BY movies.score desc');

    return result.map(x => new MovieView(x));
}

module.exports = {
    QueryAsync
}