const MessageQueue = require('../../../../Infrastructure/RabbitMQ');

const QUEUE = 'ranks';

/**
 * 
 * @param {AddMovieReviewCommand} movieReviewCommand
 */
const HandleAsync = async (movieReviewCommand) => {
    await MessageQueue.PublishMessageAsync(QUEUE, movieReviewCommand);
};

module.exports = {
    HandleAsync
}