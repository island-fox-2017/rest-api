'use strict'

const express = require('express');
const app = express();
const model = require('./models');
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const api = require('./routers/api');

app.get('/', function(req,res){
  res.send('hai')
})


app.use('/api', api);




app.listen(3000)
