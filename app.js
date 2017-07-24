'use strict'

const express = require('express');
const app = express();
const model = require('./models');
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))

const api = require('./routers/api');

app.get('/', function(req,res){
  res.send('hai')
})


app.use('/api', api);




app.listen(process.env.PORT || 3000)
