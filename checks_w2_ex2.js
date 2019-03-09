// Встроенный в Node.JS модуль для проверок
// var assert = require('assert');
//
// // Подключаем свою функцию
// var normalizeHashTags = require('./index.js');
//
// assert.deepEqual(
//     normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
//     'web, coursera, javascript, script, programming'
//     ,
//     'Список "web, coursera, JavaScript, Coursera, script, programming"' +
//     ' содержит хэштеги "web, coursera, javascript, script, programming"'
// );

console.info('OK!');


var normalizeHashTags = require('./index_w2_ex2.js');

// console.info(normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']));
console.log(normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera fkdhgdj', 'script', 'programming']));

// "web, coursera, javascript, script, programming"
