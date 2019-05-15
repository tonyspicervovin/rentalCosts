var express = require('express')
var Users = require('../models').Users
var Bills = require('../models').Bills
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
    router.get('/bills', function(req, res, next){
        Bills.findAll().then( bills => {
            return res.json(bills)
        }).catch(err => next(err))
    })
    router.delete('/bills/:id', function(req, res, next){
        Bills.destroy({where: {id: req.params.id}}).then( rowsModified => {
            return res.send('ok')
        }).catch ( err => next(err))
    })
    //deleting bills that match id passed
    router.post('/bills', function(req, res, next){
        Bills.create(req.body).then( (bill) => {

            // Get all of the Renters 
               // Users.findAll().then(users => {
                // figure out bill portion, save bill portions to database. TODO error handling, check attribute names 
                //let numberRenters = users.length 
                //let billTotal = req.body.amount 
                //let individualPortion = billTotal / numberRenters
                
                //let createBillPortions = users.map( renter =>  Renters.create( { renterId : renter.id, amount: individualPortion, billId: bill.id, paid: false, billName: bill.name} ) )

               // Promise.all(createBillPortions).then( () => {
                   // res.status(201).send()
               // })
           // })

        }).catch(err => next(err))
    })

    module.exports=router