const {
    ExecuteQuery
} = require('../../../../Infrastructure/Database');

const {
    ReviewView
} = require('../Models/ReviewView.js');

const QueryAsync = async () => {
    const result = await ExecuteQuery('SELECT * FROM ranks ORDER BY ranks.inserted_at desc');

    return result.map(x => new ReviewView(x));
}

module.exports = {
    QueryAsync
}