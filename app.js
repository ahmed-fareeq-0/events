const express = require("express")
const app = express()
const port = 3000

// import datbase 
const db = require("./config/db")

// import ejs
app.set('view engine', 'ejs')

// bring static
app.use(express.static('public'))
app.use(express.static("node_modules"))


app.get("/", (req, res) => {
    res.send("hello home")
})

// import event-routes 
const event = require("./routes/event-routes")
app.use("/events", event)


// server listen to port
app.listen(port, () => console.log(`open server on port ${port}`))