'use strict'
const Utils = require('./utils');
class User extends Utils{

  constructor() {
    super(5)
    console.log('constructor');
  }

  save(cb){
    if(super.save() === true) {
      cb(false);
    } else {
      cb(true);
    }
    // cb('Error')
  }
}

module.exports = User;