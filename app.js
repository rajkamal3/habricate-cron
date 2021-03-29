const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Habit = require('./models/habitModel');
const cron = require('node-cron');

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
        // getAllHabits();
    });

// const getAllHabits = async () => {
//     const habits = await Habit.find({});
//     console.log(habits);
// };

cron.schedule(
    // '0 0 * * *',
    '*/3 * * * * *',
    '15 8 * * *',
    async () => {
        console.log('Runs everyday at 12:00 AM at Asia/Kolkata timezone ' + Math.floor(Math.random() * 10));
        // const habits = await Habit.find({ user: store.user._id });
        // console.log(habits);
    },
    {
        scheduled: true,
        timezone: 'Asia/Kolkata'
    }
);
