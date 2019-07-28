'use strict'

const express = require('express')
const bodyParser = require('body-parser')

//setting up DB connection
const mongoose = require('mongoose')
const database = require('./app/config/database')

mongoose.connect(database.url, {useNewUrlParser: true})
mongoose.Promise = global.Promise
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//include our route files
const product = require('./app/routes/product.route')

//initialize the app
const app = express()

//using body parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/products', product)

const port = process.env.PORT || 3030
app.listen(port, () => {
    console.log('Server running on ' + port)
})