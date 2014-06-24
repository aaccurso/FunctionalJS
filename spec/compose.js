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

  it('should compose f', function() {
    var composed_f = _.compose(f);
    expect(composed_f(3)).toBe(5);
    expect(composed_f(5)).toBe(7);
  });

  it('should compose g', function() {
    var composed_g = _.compose(g);
    expect(composed_g(3)).toBe(6);
    expect(composed_g(5)).toBe(10);
  });

  it('should compose fog', function() {
    var fog = _.compose(f, g);
    expect(fog(3)).toBe(8);
    expect(fog(4)).toBe(10);
  });

  it('should compose gof', function() {
    var gof = _.compose(g, f);
    expect(gof(3)).toBe(10);
    expect(gof(4)).toBe(12);
  });

  it('should compose a multi argument function h', function() {
    var h = function (num1, num2) {
      return num1 + num2;
    }
    var goh = _.compose(g, h);
    expect(goh(3, 2)).toBe(10);
    expect(goh(4, 3)).toBe(14);
  });
});