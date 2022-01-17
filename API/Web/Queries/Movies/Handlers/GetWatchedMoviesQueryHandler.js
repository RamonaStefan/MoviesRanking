const {
    ExecuteQuery
} = require('../../../../Infrastructure/Database');

const {
    MovieView
} = require('../Models/MovieView.js');

const QueryAsync = async (user) => {
    const result = await ExecuteQuery('SELECT * FROM movies INNER JOIN ranks ON movies.name = ranks.name WHERE ranks.username = $1 ORDER BY movies.score desc', [user]);

    return result.map(x => new MovieView(x));
}

module.exports = {
    QueryAsync
}