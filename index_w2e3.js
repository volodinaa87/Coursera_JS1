// Телефонная книга
// var phoneBook = {};
var book = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
/*module.exports =

function (command) {

    var cmd = command.split(' ');

    if (cmd[0] === 'ADD') {
        var name = cmd[1];
        var number = cmd[2].split(',');
        if(!phoneBook.hasOwnProperty(name)){
            phoneBook[name] = number;
        }
        else {
            number.forEach(function(num) {
                if(!phoneBook[name].hasOwnProperty(num)) {
                    phoneBook[name].push(num);

                }
            });}
        var arr = phoneBook[name];
         console.log('---add phonebook---:'+name + ' Number :'+number);
        console.log(arr);
    }

    if (cmd[0] === 'REMOVE_PHONE') {
        // var numberDel = command.split(' ')[1];
        var numberDel = cmd[1];
        console.log('Удаляемый номер: '+numberDel);
        for(var name in phoneBook){
            console.log('Name in Phonebook to remove: '+name);
            for(var number in phoneBook[name]){
                // console.log('Name in Phonebook[Name] to remove: '+phoneBook[name]);
                // console.log('Number in Phonebook[Name] to remove: '+phoneBook[name][number]);
                // console.log(number + ': delete '+ numberDel);


                if(phoneBook[name][number] === numberDel){
                    console.log('---remove number === numberDel---:'+phoneBook[name] +':-xxx-:'+phoneBook[name][number]);
                    if(Object.keys(phoneBook[name]).length === 1){
                        delete phoneBook[name];
                        // console.log(Object.keys(phoneBook[name]).length)
                        console.log('++++++++')
                    }else{

                        // delete phoneBook[name][number];
                        phoneBook[name].splice(phoneBook[name][number],1);

                    }

                    return true;
                }


            }
            // return false;
        }
        // console.log('---remove false---');
        return false;
    }

    if (cmd[0] === 'SHOW'){
        var str =[];
        for(var name in phoneBook){
            str.push(name + ': ' + phoneBook[name].join(', '));
        }
        str.sort();
        // console.log('---show begin---');
        console.log('ShowOutPrint:\n'+str);
        // console.log('---show end---');
        // return str;
        return str;
    }
};
*/

module.exports = function (command) {
    if (typeof(book) === 'undefined'){
        book = {};
    }
    var commandName = command.split(' ');
    function ADD(name,telephone){
        var telephones = telephone.split(',');
        if (book.hasOwnProperty(name))
            book[name] = book[name].concat(telephones);
        else{
            book[name] = [].concat(telephones);
        }
    }
    function SHOW(){
        var output  = [];
        var PropertyName = Object.keys(book);
        for (var i = 0; i < PropertyName.length; i++ ) {
            if (book[PropertyName[i]].length !== 0){
                output[i] = PropertyName[i] + '\: ' + book[PropertyName[i]].join(', ');
            }
        }
        // console.log(output.sort());
        return output.sort();
    }
    function REMOVE_PHONE(nomer){
        var PropertyName = Object.keys(book);
        var result = false;
        for (var j = 0; j < PropertyName.length; j++ ) {
            if (book[PropertyName[j]].indexOf(nomer) !== -1){
                book[PropertyName[j]].splice(book[PropertyName[j]].indexOf(nomer),1);
                result = true;
            }
        }
        return result;
    }

    switch(commandName[0]){
        case 'ADD':
            return ADD(commandName[1],commandName[2]);
        case 'SHOW':
            return  SHOW();
        case 'REMOVE_PHONE':
            return  REMOVE_PHONE(commandName[1]);
    }

};
