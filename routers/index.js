const express = require('express');
var router = express.Router()

router.get('/', (req, res)=>{
  res.send('Ini merupakan REST-API web app sederhana');
})




module.exports = router;
