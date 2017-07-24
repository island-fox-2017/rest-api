'use strict'
const crypto = require('crypto');

function randomKey(){
    var chars =  '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var length = 8;
    var result = '';

    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];

    return result;
}

function hashPass(pass, secret){
  const hash = crypto.createHmac('sha256', secret)
                     .update(pass)
                     .digest('hex');
  return hash;
}

module.exports = {
  randomKey,
  hashPass
}
