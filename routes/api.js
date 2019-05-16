var express = require('express')
var Users = require('../models').Users
var Bills = require('../models').Bills
var renterPortions = require('../models').renterPortions
var router = express.Router()

    router.get('/users', function(req, res, next){
        Users.findAll().then( users => {
            return res.json(users)
        }).catch(err => next(err))
    })
    //getting all users in user table
    router.post('/users', function(req, res, next){
        console.log('here we are')
        console.log(req.body)
        Users.create(req.body).then( (data) => {
            
            return res.status(201).send('ok')
            
        }).catch(err => next(err))
    })
    // adding renters to user table
    router.delete('/users/:renterName', function(req, res, next){
        Users.destroy({where: {renterName: req.params.renterName}}).then( rowsModified => {
            return res.send('ok')
        }).catch ( err => next(err))
    })
    //deleting users whose renter email matches the parameter sent by billservice.js
    router.get('/renterPortions/:month', function(req, res, next){
        console.log(req.params)
        renterPortions.findAll({where: {month: req.params.month}}).then( bills => {
            return res.json(bills)
        }).catch(err => next(err))
    })
    router.patch('/renterPortions/:id', function(req, res, next){
       
       renterPortions.update(req.body, {
           where: {
               id: req.params.id
           }
       }).then( (rowsModified) => {
           if (!rowsModified[0]) {
               return res.status(404).send('Not found')
           }else {
               return res.send('Ok')
           }
       }).catch( err => {
        return next(err)
       })
    })
    //patching a renter when they mark their portion as paid
    router.post('/bills', function(req, res, next){
        Bills.create(req.body).then( (bill) => {

            // Get all of the Renters 
            Users.findAll().then(users => {
                // figure out bill portion, save bill portions to database. TODO error handling, check attribute names 
                let numberRenters = users.length 
                let billTotal = req.body.amount 
                let individualPortion = billTotal / numberRenters
                
                
                let createBillPortions = users.map( user =>  
                   
                    renterPortions.create( { renterName:user.renterName,renterID: user.id,amount:individualPortion,month: bill.month,billID:bill.id,billName:bill.name,paid:false } ) )
                Promise.all(createBillPortions).then( () => {
                   res.status(201).send()
                   
                })
            })

        }).catch(err => next(err))
    })

    module.exports=router