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

// show single event
router.get("/:id", (req, res) => {

    //  search in eventSchema and show data in showEvent
    Event.findOne({_id: req.params.id}, (err,event) => {
        // if(!err){
        //     console.log(event)
        //     res.render("event/showEvent.ejs", {
        //         event: event
        //     })

        // }else{
        //     console.log(err)
        // }

        !err ? res.render("event/showEvent.ejs", {event: event}) : console.log(err)
    })
    
})

module.exports = router