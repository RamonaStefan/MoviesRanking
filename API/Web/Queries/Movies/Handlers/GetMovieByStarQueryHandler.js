const {
    ExecuteQuery
} = require('../../../../Infrastructure/Database');

const {
    MovieView
} = require('../Models/MovieView.js');

const QueryAsync = async (name) => {
    const result = await ExecuteQuery('SELECT * FROM movies WHERE movies.star = $1 ORDER BY movies.score desc', [name]);
    return result.map(x => new MovieView(x));
}

module.exports = {
    QueryAsync
}