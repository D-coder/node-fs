let http = require("http")

http.createServer(function (req, res) {
    res.write("server works")
    res.end()
}).listen(1234)