function Counter() {
  var count = 0;
  this.increment = function() {
    return count++;
  }
  this.getVal = function() {
    return count;
  }
};

module.exports = Counter;
