// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var isValidTime = require('./index_2.js');

assert.equal(isValidTime(12, 30), true, 'Время 12:30 валидное.');
assert.equal(isValidTime(12, 61), false, 'Время 12:61 невалидное');
assert.equal(isValidTime(12, 60), false, 'Время 12:61 невалидное');


console.info(isValidTime(12, 50));
console.info(isValidTime(12, 60));
console.info('OK!');
