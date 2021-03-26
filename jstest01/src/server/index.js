const dotenv = require('dotenv');
dotenv.config();





let path = require('path');
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const app = express()

const fetch = require('node-fetch');


app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('dist/index.html')
    res.sendFile(path.resolve('index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})




app.get('/test/:nom', function (req, res) {


    const urlApiKey = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&of=json&txt=" + req.params.nom + "&model=general&lang=en";

    fetch(urlApiKey).then(
        data => data.json()).then(myjson =>{
        return res.send(myjson)}
    ).catch(err => { throw err })


})
