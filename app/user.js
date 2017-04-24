class User {

  constructor() {
    console.log('constructor');
  }

  save(cb){
    console.log('saved');
    cb();
    // cb('Error')
  }
}

module.exports = User;