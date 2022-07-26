// imprt Mongoose
const mongoose = require("mongoose");
// create Schema
const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    }, 
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    created_at: {
        type: Date,
        required: true
    }
})

// save to chart
let Event = mongoose.model("Event", eventSchema, "events")
module.exports = Event