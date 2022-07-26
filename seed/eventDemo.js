const db = require("../config/db")
const Event = require("../models/Event")



let newEvent = [
    new Event({
        title: "ahmed",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "ahmed",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "ahmed",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "ali",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "ali",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "ali",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "nabaa",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "nabaa",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

    new Event({
        title: "nabaa",
        description: "this is desc",
        location: "ireq",
        date: Date.now(),
        created_at: Date.now()
    }),

]

// saveing in datebase
newEvent.forEach((event) => {
    event.save((err) => {
        if(err){
            console.log(err)
        }else {
            console.log(event);
        }
    })
})
