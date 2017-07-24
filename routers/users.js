const express = require('express');
const router = express.Router();
const usercont = require('../controllers/userscontroller')

router.get('/', usercont.getallusers);
router.get('/:id', usercont.getsingleuserbyid);
router.post('/', usercont.createnewuser);
router.put('/:id', usercont.updatedatauser);
router.delete('/:id', usercont.deletedatauser);

module.exports = router
