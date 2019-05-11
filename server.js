var express = require('express')
var app = express()
var bodyParser = require('body-parser')

var api_routes = require('./routes/api.js')

app.use(bodyParser.json())

app.use('/api', api_routes)
app.use(function(req, res, next){
    res.status(404).send('Not found')
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Server error')

})
// error handling for 404 not found and server errors

var server = app.listen(process.env.PORT || 3000, function() {
    console.log('app running on port', server.address().port)
})
//start running server on port 3000