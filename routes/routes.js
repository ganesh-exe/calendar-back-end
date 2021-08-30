const { response } = require('express')
const express =require('express');
const router =express.Router()
const Events = require('../models/Events')
const { uuid } = require('uuidv4');
const { findOneAndDelete, find } = require('../models/Events');
 
router.get('/', function(req, res, next) {
    res.send("Server for Calender is Running successfully");
  });
router.post('/addEvent',(req,res)=>{
        const event = new Events({
            time:req.body.time,
            date:req.body.date,
            timeZone:req.body.timeZone,
            description:req.body.description
        })
        event.save()
        .then(data=>{
           res.send(data)
        }).catch(err=>{
			if(err){
			res.send("Already Exist")
			}
		})
        
})

router.post('/getEvents',(req,res)=>{
  console.log(req.body)
  Events.find({date:req.body.date},function(err,data){res.send(data)})
})


module.exports = router