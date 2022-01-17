class AddUserCommand {
    constructor (entry) {
        this.username = entry.username;
        this.password = entry.password;
    }
}

module.exports = {
    AddUserCommand
}