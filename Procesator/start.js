require('dotenv').config()

var amqp = require('amqplib/callback_api');

const {
    ExecuteQuery
} = require('./Database');

const QUEUE = 'movies';
const QUEUE2 = 'ranks';
const QUEUE3 = 'users';


amqp.connect(process.env.AMQPURL, (error0, connection) => {
    if (error0) {
        throw error0;
    }
    connection.createChannel((error1, channel) => {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(QUEUE, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", QUEUE);

        channel.consume(QUEUE, async (msg) => {
            console.log(" [x] Received %s on queue movies", msg.content.toString());

            if (msg !== null) {
                const jsonPayload = JSON.parse(msg.content);
                try {
                    await ExecuteQuery("INSERT INTO movies (name, genre, releaseDate, rating, director, writer, star, country, budget, company, runtime, score, inserted_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)",
                       [jsonPayload.name, jsonPayload.genre, jsonPayload.releaseDate, jsonPayload.rating, jsonPayload.director, jsonPayload.writer, jsonPayload.star, jsonPayload.country, jsonPayload.budget, jsonPayload.company, jsonPayload.runtime, 0, new Date()]);
                } catch (err) {
                    console.error(err);
                }
            }

            channel.ack(msg);
        });
    });

    connection.createChannel((error2, channel2) => {
        if (error2) {
            throw error2;
        }

        channel2.assertQueue(QUEUE2, {
            durable: false
        });


        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", QUEUE2);

        channel2.consume(QUEUE2, async (msg) => {
            console.log(" [x] Received %s on queue ranks", msg.content.toString());

            if (msg !== null) {
                const jsonPayload = JSON.parse(msg.content);
                if (jsonPayload.score < 1 || jsonPayload > 10) {
                    console.log("Movie score must be between 1-10.")
                    return
                }
                try {
                    var movies = await ExecuteQuery('SELECT * FROM movies');
                    movies.forEach(r => scoreMovie = scoreMovie + r.score);
                    const movieFound = movies.find(element => element.name === jsonPayload.name);
                    if (movieFound === undefined) {
                        console.log("Movie does not exist in our library.")
                        return
                    }

                    await ExecuteQuery("INSERT INTO ranks (id, name, score, username, inserted_at) VALUES ($1, $2, $3, $4, $5)",
                                                [CreateGuid(), jsonPayload.name, jsonPayload.score, jsonPayload.username, new Date()]);
                
                    var reviews = await ExecuteQuery("SELECT * FROM ranks WHERE name = $1",[jsonPayload.name]);
                    var noReviews = reviews.length;
                    var scoreMovie = 0;
                    reviews.forEach(r => scoreMovie = scoreMovie + r.score);
                    scoreMovie = scoreMovie / noReviews;
                    await ExecuteQuery("UPDATE movies SET score = $1 WHERE name = $2", [scoreMovie, jsonPayload.name]);
                } catch (err) {
                    console.error(err);
                }
            }

            channel2.ack(msg);
        });
    });

    connection.createChannel((error3, channel3) => {
        if (error3) {
            throw error3;
        }

        channel3.assertQueue(QUEUE3, {
            durable: false
        });


        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", QUEUE3);

        channel3.consume(QUEUE3, async (msg) => {
            console.log(" [x] Received %s on queue users", msg.content.toString());

            if (msg !== null) {
                const jsonPayload = JSON.parse(msg.content);
                try {
                    var encodedPass = btoa(jsonPayload.password);
                    await ExecuteQuery("INSERT INTO users (username, password) VALUES ($1, $2)",
                                                [jsonPayload.username, encodedPass]);
                } catch (err) {
                    console.error(err);
                }
            }

            channel3.ack(msg);
        });
    });
});


function CreateGuid() {  
    function _p8(s) {  
       var p = (Math.random().toString(16)+"000000000").substr(2,8);  
       return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;  
    }  
    return _p8() + _p8(true) + _p8(true) + _p8();  
 } 