require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

require('log-timestamp');

const endpoints = require('./Endpoints');

const app = express();

app.use(helmet());
app.use(morgan(':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length]'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', endpoints);

const port = process.env.PORT || 80;

app.listen(port, () => {
    console.log(`App is listening on ${port}`);
    console.log(process.env.PGHOST);
});
