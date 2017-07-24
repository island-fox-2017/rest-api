const express = require ('express')
const app = express()
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

var index = require('./routers/index.js')
var users = require('./routers/users.js')

app.use("/",index);
app.use("/users",users)

app.listen(3000)
