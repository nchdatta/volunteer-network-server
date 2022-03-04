const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: String,
    description: String,
    date: Date
});


module.exports = eventSchema;