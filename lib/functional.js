'use strict';
var _ = {};

_.first = function (args) {
  return Array.prototype.slice.call(args, 0, 1)[0];
}

_.tail = function (args) {
  return Array.prototype.slice.call(args, 1);
}

_.toArray = function (args) {
  return Array.prototype.slice.call(args);
}

_.isArray = function (array) {
  return Object.prototype.toString.call(array) === '[object Array]';
}

_.compose = function () {
  var args = _.toArray(arguments).reverse();
  if(!args.length) throw new Error("No functions to compose.");
  return function () {
    return args.reduce(function (leftFn, rightFn) {
      return _.isArray(leftFn) ? rightFn.apply(null, leftFn) : rightFn(leftFn);
    }, _.toArray(arguments) );
  }
}

_.currify = function (fn) {
  var arity = fn.length;
  var args = [];
  var subFn = function (argsLength) {
    if(arity === argsLength) return fn.apply(null, args);
    else return function (arg) {
      return subFn(args.push(arg));
    } 
  }
  return subFn(0);
}
