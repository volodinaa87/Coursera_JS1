/**
 * @param {String} tweet
 * @returns {String[]}
 */
/*module.exports = function (tweet) {
    var arrSplit = tweet.split(' ');
    var arrHash = [];
    for (var i = 0; i < arrSplit.length; i++) {
        if (arrSplit[i][0] == '#') {
            arrHash.push(arrSplit[i].substring(1));
            //arrHash.push(arrSplit[i]);
        }
    }
        return arrHash;
    };
*/

/*module.exports = function (tweet) {

    var arrSplit = tweet.split(' ');
    var filteredArr=[];
    arrSplit.forEach(function(item){
        if (item[0] == '#') {
            filteredArr.push(item.replace('#',''));
        }
      });
      return filteredArr;
};
*/
module.exports = 
function (tweet) {
    var arrSplit = tweet.split(' ')
                        .filter(filterByHash)
                        //.forEach(function(element) {element.replace('#','');})
                        //.map(function(element) {element.replace('#','');})
                        ;
    
    //var filteredArr=[];
    //arrSplit.filter(filterByHash

    var filteredArr = arrSplit
    //arrSplit //.filter(filterByHash
        /*arrSplit.forEach(function(item){
        
            if (item[0] == '#') {
                filteredArr.push(item.replace('#',''));
            }
        })*/

      //)
      ;
      return filteredArr;
}
//var filteredArr=[];

function filterByHash(item) {
    if (item[0] == '#') {
        //filteredArr.push(item.replace('#',''));
        //return item;
        //item.replace('#','');
        return true;
    }
    return false;
};
