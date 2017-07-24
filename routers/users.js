const express = require('express');
const router = express.Router();
const usercont = require('../controllers/userscontroller')
const userauth = require('../helpers/verifytoken')

router.get('/', userauth.verifytokenforadmin, usercont.getallusers);
router.get('/:id', userauth.verifytokenforadminuser, usercont.getsingleuserbyid);
router.post('/', userauth.verifytokenforadmin, usercont.createnewuser);
router.put('/:id', userauth.verifytokenforadminuser,usercont.updatedatauser);
router.delete('/:id', userauth.verifytokenforadmin, usercont.deletedatauser);

module.exports = router
