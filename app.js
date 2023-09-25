const express = require('express')
const bodyParser = require("body-parser")
const dateCondition = require("./Middlewares/date")

// initialisation app params
const app = express()
const port = 3500
app.use(bodyParser())
// define routes
app.get('/',dateCondition, (req, res) => {

    res.status(200).send("hello there 👌")

})

app.get("/welcome", (req, res) => {
    res.status(200).send("<h1> welcome to express👏 </h1>");
});

app.get('/home',dateCondition, (req, res) => {
    try {
        res.sendFile(__dirname + "views/index.html", (error))
        res.status(400).send("<h2> Sorry 🤦‍♀️,try again </h2>")
    }catch (error) {
        // the msg that i want to show to the customer
        res.status(404).send("sorry not found");
        console.log(error)
    };
})



app.post('/addUser', (req, res) => {
    if (req.body) {
        console.log(req.body);
        res.status(200).send("user added successfully")
    } else {
        res.status(400).send("andek ghalta")
    }
})


// starting the server on the express app
app.listen(port, (e) => {

    if (e) {
        console.log("error in the server:", e);
    } else {
        console.log(`server is running on..http://localhost:${port}`);
    }

})


