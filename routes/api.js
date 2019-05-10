var express = require('express')
var Users = require('../models').Users
module.exports = function(renter) {
    var router = express.Router()
    router.get('/users', function(req, res, next){
        renter.findAll().then( renter => {
            return res.json(renter)
        }).catch(err => next(err))
    })
    router.post('/users', function(req, res, next){
        renter.create(req.body).then( (data) => {
            console.log('made it')
            return res.status(201).send('ok')
            
        }).catch(err => next(err))
    })
    return router
}