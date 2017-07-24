'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const Index = require('./routers/index');
const Api = require('./routers/api');

const model = require('./models');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.json({ type: 'application/x-www-form-urlencoded' }));

app.use('/', Index);
app.use('/api', Api);

app.listen(process.env.PORT || 3000);
