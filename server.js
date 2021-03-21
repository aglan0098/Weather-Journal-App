// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express  = require('express');
// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

app.get('/get', (req, res) => {
    res.send(projectData)
})


app.post('/addData', (req, res) => {
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        response: req.body.response
    }

    res.send(projectData)
})


const port = 5000;

app.listen(port, () => {
    console.log(`server is runung on port: ${port}`)
})