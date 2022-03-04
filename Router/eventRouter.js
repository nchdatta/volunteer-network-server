const express = require('express');
const mongoose = require('mongoose');
const eventSchema = require('../Schemas/eventSchema');
const eventRouter = express.Router();
const Event = mongoose.model('Event', eventSchema)

// Get all events 
eventRouter.get('/', async (req, res) => {
    try {
        const result = await Event.find({});
        res.json(result);

    } catch (err) {
        res.status(500).send('There was a server side error.');
    }
})
//filtering event
eventRouter.get('/filter', async (req, res) => {
    try {
        const q = req.query.q;
        console.log(q)
        const query = { title: { $regex: q } };
        const result = await Event.find(query);
        console.log(result)
        res.json(result);
    } catch (err) {
        res.status(500).send('There was a server side error.');
    }
})
//Get a event
eventRouter.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Event.findOne({ id });
        res.json(result);

    } catch (err) {
        res.status(500).send('There was a server side error.');
    }
})
//Post a event
eventRouter.post('/', async (req, res) => {
    try {
        const data = req.body;
        const event = new Event(data);
        const result = await event.save();
    } catch (err) {
        res.status(500).send('There was a server side error.');
    }
})



module.exports = eventRouter;