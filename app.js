
const express = require("express")
const app = express()
const port = 5000

// bring static
app.use(express.static('public'))
app.use(express.static("node_modules"))

// import ejs
app.set('view engine', 'ejs')


app.get("/", (req, res) => {
    res.send("hello home")
})

// import event-routes 
const event = require("./routes/event-routes")
app.use("/event", event)

app.listen(port, () => console.log(`open server on port ${port}`))