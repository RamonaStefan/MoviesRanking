class MovieView {
    constructor (entry) {
        this.name = entry.name;
        this.genre = entry.genre;
        this.releaseDate = entry.releasedate;
        this.rating = entry.rating;
        this.director = entry.director;
        this.writer = entry.writer;
        this.star = entry.star;
        this.country = entry.country;
        this.budget = entry.budget;
        this.company = entry.company;
        this.runtime = entry.runtime;
        this.score = entry.score;
        this.insertedAt = entry.inserted_at;
    }
}

module.exports = {
    MovieView
}