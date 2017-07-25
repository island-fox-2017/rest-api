const express = require('express');
const api = require('./routers/api');
const home = require('./routers/index');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', home);
app.use('/api', api);

app.listen(3000)
