const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

let signup = require('./routers/signup');
let signin = require('./routers/signin');
let users = require('./routers/users');

app.use('/api/signup', signup);
app.use('/api/signin', signin);
app.use('/api/users', users);

app.listen(3000, function() {
  console.log('I am listening on port 3000');
})
