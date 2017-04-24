const assert = require('assert');

describe('my suite', () => {
  before(function() {
    console.log('before');
  });

  after(function() {
    console.log('after');
  });

  beforeEach(function() {
    console.log('beforeEach');
  });

  afterEach(function() {
    console.log('afterEach');
  });

  it('my test', () => {
    const isTrue = true;
    assert.ok(isTrue);
  });
});