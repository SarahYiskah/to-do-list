const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//initialize express
const app = express()

//bodyParser middleware
app.use(bodyParser.json())

//configure the database
const db = require('./config/keys').mongoURI

//connect to mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

  const port = process.env.PORT || 5000
  app.listen(port, () => console.log(`Server started on port ${port}`))
