class ReviewView {
    constructor (entry) {
        this.name = entry.name;
        this.score = entry.score;
        this.username = entry.username;
        this.insertedAt = entry.inserted_at;
    }
}

module.exports = {
    ReviewView
}