const express = require('express');
const user = require('./routers/users');
const home = require('./routers/index');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', home);
app.use('/users', user);

app.listen(3000)
