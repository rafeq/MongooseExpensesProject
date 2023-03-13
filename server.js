const express = require('express')
const path = require('path')
const bodyParser=require('body-parser')
const api=require('./server/routes/api')
const mongoose = require("mongoose");


const app = express()
app.use(express.json())

app.use('/',api)

mongoose
  .connect(
    "mongodb://localhost/expenses")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const port = 3000 
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})



