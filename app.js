const express = require("express")
const app = express()
const port = 3000

// import datbase 
const db = require("./config/db")

// import bodyparser 
const bodyParser = require("body-parser")

// import session
const session = require("express-session")

// import session
const flash = require("connect-flash")

// import ejs
app.set('view engine', 'ejs')

// bring body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// bring static
app.use(express.static('public'))
app.use(express.static("node_modules"))

// configuriton session and flash
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 * 15}
  }))

app.use(flash())


app.get("/", (req, res) => {
    res.send("hello home")
})

// import event-routes 
const event = require("./routes/event-routes")
app.use("/events", event)


// server listen to port
app.listen(port, () => console.log(`open server on port ${port}`))