const express = require("express")
const router = express.Router()
const Event = require("../models/Event")

// route to home event
router.get("/", (req, res) => {
    //  search in eventSchema and show data in index page  
    Event.find({}, (err, events) => {
        // let chunk = []
        // let chunkSize = 3
        // for(i=0 ; i < events.length; i+= chunkSize){
        //     chunk.push(events.slice(i, chunkSize + i))
        // }
        // res.json(chunk)
           !err ? res.render("event/index.ejs", {events: events}) : console.log(err)
    })
    
})

// route create 
router.get( "/create", (req,res) => {
    res.render("../views/event/createEvent.ejs")
})


// Take data from form and save to db
router.post("/create", (req,res) => {

    let newEvent = new Event({
        title: req.body.title,
        description: req.body.description,
        location: req.body.location,
        date: req.body.date,
        created_at: Date.now()
    })

    newEvent.save((err) => {
        !err ? res.redirect("/events") : console.log(err)
    })
})


// show single event
router.get("/:id", (req, res) => {

    //  search in eventSchema and show data in showEvent
    Event.findOne({_id: req.params.id}, (err,event) => {
        !err ? res.render("event/showEvent.ejs", {event: event}) : console.log(err)
    })
    
})

module.exports = router