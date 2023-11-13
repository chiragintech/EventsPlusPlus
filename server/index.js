const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventModel = require('./Models/eventModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get('/get', (req, res) => {
    eventModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
})

app.post('/add', (req, res) => {
    const task = req.body.task;
    eventModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})
app.listen(3010, () => console.log('Server is running'));