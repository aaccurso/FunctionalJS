'use strict';
describe('_.currify', function() {

  var f = function (num1, num2) {
    return num1 + num2;
  };
  var g = function (num1, num2) {
    return num1 * num2;
  };

  it('should be defined', function() {
    expect(_.currify).toBeDefined();
  });

  it('should currify f manually', function() {
    var curried_f = function (num1) {
      return function (num2) {
        return f(num1, num2);
      }
    }
    expect(curried_f(3)(4)).toBe(7);
  });

  it('should currify f', function() {
    var curried_f = _.currify(f);
    expect(typeof curried_f).toBe('function');
    expect(curried_f(3)(4)).toBe(7);
    expect(curried_f(4)(5)).toBe(9);
  });

  it('should currify g', function() {
    var curried_g = _.currify(g);
    expect(typeof curried_g).toBe('function');
    expect(curried_g(3)(4)).toBe(12);
    expect(curried_g(4)(5)).toBe(20);
  });

  it('should currify multi argument function h', function() {
    var h = function (arg1, arg2, arg3) {
      return arg1 + arg2 + arg3;
    }
    var curried_h = _.currify(h);
    var curried_h_add5 = curried_h(5);
    expect(curried_h_add5(3)(2)).toBe(10);
    expect(curried_h_add5(34)(26)).toBe(55);
  });
});