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



const apiserv = async (urlApiKey) => {
    const midatajson = await fetch(urlApiKey).then((dataRes) =>{ return dataRes.json()})
    //console.debug(midatajson)
    return midatajson
}


app.get('/test/:nom', function (req, res) {
    const urlApiKey = "https://api.meaningcloud.com/sentiment-2.1?key=" + process.env.API_KEY + "&of=json&txt=" + req.params.nom + "&model=general&lang=en";
    apiserv(urlApiKey).then((resdata) => {
        //console.debug(resdata)
        return res.send(resdata)
    }).catch(err => {throw err})

})





