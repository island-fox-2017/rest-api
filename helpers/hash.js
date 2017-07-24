"use strict"

const crypto = require('crypto');

module.exports = (pass, salt) => {
  const hash = crypto.createHmac('sha256', salt)
  .update(pass)
  .digest('hex');
  
  return hash;
}
