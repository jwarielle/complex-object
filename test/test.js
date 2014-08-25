var chai = require('chai');
var expect = chai.expect;

var Counter = require('../js/object.js')

describe('Counter Object', function() {
  var counterObject = new Counter();

  it('Should be truthy (it should be a real contructor and work', function() {
    expect(counterObject).to.be.ok;
  })

  it('Should start with a count equal to zero', function() {
    expect(counterObject.getVal()).to.eql(0);
  })

  it('Should increment count by one each time increment() is called', function() {
    expect(counterObject.increment()).to.eql(0);
  })

  it('Should return the current value of count when the getVal() is called', function() {
    expect(counterObject.getVal()).to.eql(1);
  })
});
