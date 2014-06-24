'use strict';
var _ = {};

_.first = function (args) {
  return Array.prototype.slice.call(args, 0, 1)[0];
}

_.tail = function (args) {
  return Array.prototype.slice.call(args, 1);
}

_.compose = function () {
  var args = Array.prototype.slice.call(arguments);
  return function () {
    return args.reverse().reduce(function (leftFn, rightFn) {
      return rightFn(leftFn);
    }, arguments[0]);
  }
}