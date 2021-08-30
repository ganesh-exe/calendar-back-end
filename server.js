const express = require('express')
const app =express()
const mongoose =require('mongoose')
const routesurls = require('../server/routes/routes')
const cors = require('cors')


mongoose.connect('mongodb+srv://ganesh:Slalitha1399@cluster0.o5pi7.mongodb.net/calendar?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log('mongo is connected.');
  })
 
  
  app.use(express.json())
  app.use(cors())
  app.use('/', routesurls)

  let port=2602
  app.listen(port, ()=> console.log(`server up and is running on port ${port}`))