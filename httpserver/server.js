const http = require('http')
const port = 3000

const reqHandler = function (req, res) {
    res.end("Hello from nodejs")
}

const server = http.createServer(reqHandler)

server.listen(port, function (err) {
    if(err) {
        console.log(err)
    }
    console.log(`server started on port: ${port}`)
})