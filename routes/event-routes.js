const express = require("express")
const router = express.Router()
const Event = require("../models/Event")

// route to home event
router.get("/", (req, res) => {
    Event.find({}, (err, events) => {
        // let chunk = []
        // let chunkSize = 3
        // for(i=0 ; i < events.length; i+= chunkSize){
        //     chunk.push(events.slice(i, chunkSize + i))
        // }
        // res.json(chunk)
           res.render("event/index.ejs", {
            events: events
           })
    })
    
})

// show single event
router.get("/:id", (req, res) => {
    res.render("event/showEvent.ejs")
})

module.exports = router