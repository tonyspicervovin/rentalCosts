var express = require('express')
var Users = require('../models').Users

    var router = express.Router()
    router.get('/users', function(req, res, next){
        Users.findAll().then( renter => {
            return res.json(renter)
        }).catch(err => next(err))
    })
    router.post('/users', function(req, res, next){
        console.log('here we are')
        console.log(req.body)
        Users.create(req.body).then( (data) => {
            
            return res.status(201).send('ok')
            
        }).catch(err => next(err))
    })
    module.exports=router