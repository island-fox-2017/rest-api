const express = require('express')
const router = express.Router()
var models = require("../models")
var userModel = require("../controller/user")


router.post("/signup", userModel.postUser)
router.post("/signin", userModel.signin)

module.exports = router;
