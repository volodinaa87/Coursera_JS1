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
