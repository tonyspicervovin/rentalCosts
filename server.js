var express = require('express')
var bodyParser = require('body-parser')
var Sequelize =require('sequelize')
var api_routes = require('./routes/api.js')

sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite3'
})
// db config
sequelize.authenticate()
.then(()=> console.log('connected to sqlite'))
.catch(err => console.log('error connecting'))
let users = require('./models/users.js') (sequelize, Sequelize)
//verify connection
var app = express()
app.use(bodyParser.json())
//app configuration

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