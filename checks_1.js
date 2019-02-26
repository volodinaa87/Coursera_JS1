// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var sum = require('./index_1.js');

//console.log(sum('101 обезьян', 17));
//console.log(sum('101', 17));

assert.equal(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert.equal(sum(101, '17'), 118, 'При сложении 101 и 17 получится 118');
//assert.equal(sum('101 обезьян', 17), isNaN, 'При сложении 101 и 17 обезьян получится NaN');
//assert.equal(sum('101 обезьян', 17),NaN,'ddd');

console.info('OK!');
