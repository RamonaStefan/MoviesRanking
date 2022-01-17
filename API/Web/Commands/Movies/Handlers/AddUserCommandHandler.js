const MessageQueue = require('../../../../Infrastructure/RabbitMQ');

const QUEUE = 'users';

/**
 * 
 * @param {AddUserCommand} userCommand
 */
const HandleAsync = async (userCommand) => {

    await MessageQueue.PublishMessageAsync(QUEUE, userCommand);
};

module.exports = {
    HandleAsync
}