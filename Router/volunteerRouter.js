const express = require('express');
const mongoose = require('mongoose');
const volunteerSchema = require('../Schemas/volunteerSchema');
const volunteerRouter = express.Router();
const Volunteer = mongoose.model('Volunteer', volunteerSchema)

// Get all volunteers 
volunteerRouter.get('/', async (req, res) => {
    try {
        const result = await Volunteer.find();
        res.json(result);
    } catch (err) {
        res.status(500).send("There was a server side error.");
    }
})
//Get a volunteer
volunteerRouter.get('/:id', async (req, res) => {
})

//Volunteer post
volunteerRouter.post('/', async (req, res) => {
    try {
        const newVolunteer = new Volunteer(req.body);
        const result = await newVolunteer.save();
        // res.json(result);
    } catch (err) {
        res.status(500).send("There was a server side error.");
    }
})
//Delete Volunteer record
volunteerRouter.delete('/:id', async (req, res) => {
    try {
        const q = { _id: req.params.id };
        const result = await Volunteer.deleteOne({}, q);
        const data = await Volunteer.find({});
        res.json(data);
    } catch (err) {
        res.status(500).send("There was a server side error.");
    }
})



module.exports = volunteerRouter;