const mongoose = require('mongoose');
const volunteerSchema = mongoose.Schema({
    name: String,
    email: String,
    description: String,
    regisDate: Date,
    event: String
});


module.exports = volunteerSchema;