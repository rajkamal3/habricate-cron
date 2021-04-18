const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Habit = require('./models/habitModel');
const cron = require('node-cron');

const Router = require('express').Router;
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

dotenv.config({
    path: `${__dirname}/config.env`
});

MongoClient.connect(process.env.DB_WITH_PASSWORD, {
    useUnifiedTopology: true
})
    .then(client => {
        return client.db().collection('habits').find();
    })
    .then(habits => {
        habits.forEach(habit => {
            console.log(habit);
        });
    })
    .catch(err => {
        console.log(err);
    });

// dotenv.config({
//     path: `${__dirname}/config.env`
// });

// const app = express();

// app.use(express.json());

// const DB = process.env.DB.replace('<password>', process.env.DB_PASSWORD);

// mongoose
//     .connect(DB, {
//         useCreateIndex: true,
//         useFindAndModify: true,
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     })
//     .then(() => {
//         console.log('Database connection successful!');
//         // getAllHabits();
//     });

// const getAllHabits = async () => {
//     const habits = await Habit.find({});
//     console.log(habits);
// };

// cron.schedule(
//     // '0 0 * * *',
//     // '*/3 * * * * *',
//     '33 23 * * *',
//     async () => {
//         console.log('Runs everyday at 20:43 AM at Asia/Kolkata timezone ' + Math.floor(Math.random() * 10));
//         const habit = await Habit.find({ _id: '606209b203ca2a3fd488bbc5' });
//         // console.log(habit);

//         // let whole = {
//         //     _id: '606027af35261d48f8b2fe62',
//         //     name: '1',
//         //     doAtTime: [
//         //         {
//         //             date: '2021-03-27T06:51:24.878Z',
//         //             data: [
//         //                 {
//         //                     checked: true,
//         //                     _id: '606027af35261d48f8b2fe63',
//         //                     time: '13:23'
//         //                 },
//         //                 {
//         //                     checked: true,
//         //                     _id: '606027af35261d48f8b2fe64',
//         //                     time: '02:41'
//         //                 }
//         //             ]
//         //         },
//         //         {
//         //             date: '2021-03-28T06:51:24.878Z',
//         //             data: [
//         //                 {
//         //                     checked: true,
//         //                     _id: '606027af35261d48f8b2fe63',
//         //                     time: '13:23'
//         //                 },
//         //                 {
//         //                     checked: false,
//         //                     _id: '606027af35261d48f8b2fe64',
//         //                     time: '02:41'
//         //                 }
//         //             ]
//         //         }
//         //     ],
//         //     doAtPlace: 'A',
//         //     dailyTarget: 1,
//         //     dailyTargetUnit: 'As',
//         //     reminder: true
//         // };

//         let nextData = { ...habit.doAtTime[habit.doAtTime.length - 1] };

//         let tomorrow = new Date(nextData.date);

//         tomorrow.setDate(tomorrow.getDate() + 1);
//         nextData.date = tomorrow.toISOString();

//         for (let i = 0; i < nextData.data.length; i++) {
//             nextData.data[i].checked = false;
//         }

//         console.log(nextData);

//         habit.doAtTime.push(nextData);

//         console.log(habit.doAtTime);
//         console.log('Huell failed');
//     },
//     {
//         scheduled: true,
//         timezone: 'Asia/Kolkata'
//     }
// );
