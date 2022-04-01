require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error',(error)=> console.error(error))
db.once('open',()=>console.log('Connected to Database'))

app.use(express.json())
const subscribersR = require('./routers/Subscriber')
app.use('/Subscriber',subscribersR)

app.get("/" , (req, res) =>{
    res.send("Hello Node.Js Rest Server")
})

app.listen(3000,()=> console.log('Server Started'))