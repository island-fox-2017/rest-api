const express = require('express');
let app = express();

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// users
var user = require('./routes/users');
app.use('/users', user)

// sign
var sign = require('./routes/signs');
app.use('/', sign)

// Port for open app
app.listen(process.env.PORT || 3000);