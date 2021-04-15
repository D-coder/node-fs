var express = require("express");
var axios = require("axios");
var fs = require('fs');
var port = 1234;
var app = express();

app.get('/', function (req, res) {
    res.send(getData())
})

app.listen(port, function () {
    console.log(`Server: ${port}`)
})


var logFile = (rec, fileName) => {
   
    var fWS = fs.createWriteStream(`${fileName}`)
    fWS.on('error', (error) => {
        console.log(`Error: ${error}`)
    })
    data(
    `id: ${rec.id}\n
    name:${rec.name}\n
    email:${rec.email}\n
    body:${rec.body}\n`,
    fWS)
    fWS.end();

    // console.log("success");
}

var data = (message, fWS) => {
    fWS.write(message)
}

var getData = () => {
    var fileName = process.argv[2]    
    var id= process.argv[3]
    if (true) {
    
            // console.log("glad it's working");

        axios.get(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(response => {
                logFile(response.data, fileName)
                console.log(`Data copied to ${fileName}`)
            })
            .catch(function (error) {
                console.log(`Encountered Error:`, error.message)
            })
            .then(function () {
            })
    }
}