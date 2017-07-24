const auth = require('../helpers/authorizer');
const db = require('../models');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const usrCtrl = require('../controller/usrCtrl');


router.get('/', auth.isAdmin, usrCtrl.findAll);

router.get('/:id', auth.isBoth, usrCtrl.findById);

router.post('/', auth.isAdmin, usrCtrl.create);

router.delete('/:id', auth.isAdmin, usrCtrl.delete);

router.put('/:id', auth.isBoth, usrCtrl.update);

module.exports = router;
