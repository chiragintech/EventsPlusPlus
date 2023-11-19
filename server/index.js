const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const eventModel = require('./Models/eventModel');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://chirag611:jajRuz-cibga7-cighyq@cluster1.9xg24hl.mongodb.net/?retryWrites=true&w=majority")

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