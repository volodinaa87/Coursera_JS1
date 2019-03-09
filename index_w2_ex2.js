/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
        //var resultHash=[];
        var lowers = hashtags.join(',')
            .toLowerCase()
            .split(',')
            //.filter(function(item, i, hashtags){ return hashtags.indexOf(item) === i; })
            .filter(function(item, i, hashtags) {
                var filterSpace = " ";
                if (item.indexOf(filterSpace) === -1){
                    return hashtags.indexOf(item) === i;
                    //resultHash.push(item);
                }
            })
            .join(', ')
            .toString();
return lowers;
};
//////////////////////
//решение перебором
//     nextInput:
//     for (var i = 0; i < lowers.length; i++) {
//         var str = lowers[i]; // для каждого элемента
//         for (var j = 0; j < resultHash.length; j++) { // ищем, был ли он уже?
//             if (resultHash[j] == str) continue nextInput; // если да, то следующий
//         }
//         resultHash.push(str);
//     }

//////////////////////
//////////////////////
//решение через свойства объекта
//         var obj = {};
//         // for (var i = 0; i < lowers.length; i++) {
//         for (var i in lowers) {
//             var str = lowers[i];
//             obj[str] = true; // запомнить строку в виде свойства объекта
//         }
//         // var resultHash = Object.keys(obj);
//         return Object.keys(obj);
//////////////////////
    //var resultHash = lowers.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
// return lowers;
// return resultHash.join(', ').split(',').toString();
// };
