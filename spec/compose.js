'use strict';
describe('_.compose', function() {

  var f = function (num) {
    return num + 2;
  };
  var g = function (num) {
    return num * 2;
  };

  it('should be defined', function() {
    expect(_.compose).toBeDefined();
  });

  it('should define a function that calls another function with args', function() {
    var proxy = function (fn) {
      return function () {
        return fn.apply(null, arguments);
      }
    }
    expect(proxy(f)(2)).toBe(4);
  });

  it('should compose fog', function() {
    var fog = _.compose(f, g);
    expect(fog(3)).toBe(10);
  });

  it('should compose gof', function() {
    var gof = _.compose(g, f);
    expect(gof(3)).toBe(12);
  });

});