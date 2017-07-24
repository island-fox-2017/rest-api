const express = require('express');
const router = express.Router();
const db = require('../models')
const controllers = require('../controllers/users')
const middleware = require('../helpers/auth')

router.get('/', middleware.authorizeAdmin, controllers.getfindAll);

router.get('/:id', middleware.authorizeUser, controllers.getfindById);

router.post('/', middleware.authorizeAdmin, controllers.postcreate)

router.delete('/:id', middleware.authorizeAdmin, controllers.deletedestroy)

router.put('/:id', middleware.authorizeUser, controllers.putfindById)

module.exports = router;
