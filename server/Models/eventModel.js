const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    task: Object
})

const eventModel = mongoose.model("events", eventSchema)
module.exports = eventModel