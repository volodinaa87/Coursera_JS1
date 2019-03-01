/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
    var filteredArr=[];
    tweet.split(' ').forEach(function(item){
        if (item[0] === '#') {
            filteredArr.push(item.replace('#',''));
        }
    });
    return filteredArr;
};
