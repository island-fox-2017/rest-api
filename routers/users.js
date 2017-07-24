const express = require('express')
const router = express.Router()
var models = require("../models")
var user = require("../controller/user")
const auth = require('../helper/authAdmin')
const authUser = require('../helper/authUserAdmin')


router.get("/", auth.authAdmin, user.getAllUser)
router.post("/",user.postUser)

router.get("/:id",authUser.authUserAdmin, user.getByid)
router.delete("/:id",authUser.authUserAdmin, user.deleteUser)
router.put("/:id", authUser.authUserAdmin, user.updateUser)


module.exports = router;
