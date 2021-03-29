const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({
    path: `${__dirname}/config.env`
});

const app = express();

app.use(express.json());

const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);

mongoose
    .connect(DB, {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('Database connection successful!');
    });

app.get('/', (req, res, next) => {
    res.send(`I'm da beef`);
});
