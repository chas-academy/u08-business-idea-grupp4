'use strict'


const mongoose = require('mongoose')
const { mongoDB } = require('./data')

mongoose.connect(mongoDB.URL, {
    useNewUrlParser: true,
    useUnifiedTopology : true
})
    
    .then(db => console.log(`data base is connected`))
    .catch(err => console.log(`there was an error ${err}`))