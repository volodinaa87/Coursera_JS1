var uniqueArray = function(arrArg) {
  return arrArg.filter(function(elem, pos,arr) {
    return arr.indexOf(elem) == pos;
  });
};

var uniqEs6 = (arrArg) => {
  return arrArg.filter((elem, pos, arr) => {
    return arr.indexOf(elem) == pos;
  });
}

var test = ['mike','james','james','alex'];
var testBis = ['alex', 'yuri', 'jabari'];
console.log(uniqueArray(test.concat(testBis)));
