const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const eventRouter = require('./Router/eventRouter');
const volunteerRouter = require('./Router/volunteerRouter');

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());

// Mongodb connection with mongoose
const uri = `mongodb+srv://mongo_db:6Z2RjVS5q1ls2DY9@cluster0.klu77.mongodb.net/volunteer-network?retryWrites=true&w=majority`;
mongoose.connect(uri, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Connected.')
    }
})

// Connection end 

// Router for event router 
app.use('/events', eventRouter);

// Router for volunteer router 
app.use('/volunteers', volunteerRouter);

app.get('/', (req, res) => {
    res.send("Hitting server root");
})

app.listen(port, () => {
    console.log("Listening to port ", port);
});