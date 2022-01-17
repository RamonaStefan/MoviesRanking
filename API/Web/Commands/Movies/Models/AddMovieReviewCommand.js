class AddMovieReviewCommand {
    constructor (entry) {
        this.name = entry.name;
        this.score = entry.score;
        this.username = entry.username;
    }
}

module.exports = {
    AddMovieReviewCommand
}