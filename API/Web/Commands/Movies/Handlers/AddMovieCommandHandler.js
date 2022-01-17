const MessageQueue = require('../../../../Infrastructure/RabbitMQ');

const QUEUE = 'movies';

/**
 * 
 * @param {AddMovieCommand} movieCommand
 */
const HandleAsync = async (movieCommand) => {

    await MessageQueue.PublishMessageAsync(QUEUE, movieCommand);
};

module.exports = {
    HandleAsync
}