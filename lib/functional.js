'use strict';
var _ = {};

_.first = function (args) {
  return Array.prototype.slice.call(args, 0, 1)[0];
}

_.tail = function (args) {
  return Array.prototype.slice.call(args, 1);
}

_.compose = function () {
  var compose = function () {
    var first = _.first(arguments);
    var tail = _.tail(arguments);
    if (tail.length) return first(compose(this, tail));
    else return first.apply(null, this.args);
  }
  var fns = arguments;
  if( ! fns.length ) throw new Error('No functions found.');
  return function () {
    return compose.apply({args: arguments}, fns);
  }
}