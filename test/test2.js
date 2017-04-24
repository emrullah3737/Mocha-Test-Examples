User = require('../app/user');

describe('User', function() {
  describe('#save()', function() {
    it('should save without error', function(done) {
      const user = new User('Luna');
      user.save((err) => {
        if (err) done(err);
        else done();
      });
      // or
      // user.save(done);
    });
  });
});
