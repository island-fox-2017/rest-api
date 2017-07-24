const express = require('express');
const router = express.Router();
const signincont = require('../controllers/signincontroller')
const genSalt = require('../helpers/generatesalt');

router.post('/', signincont.signin)

module.exports = router;
