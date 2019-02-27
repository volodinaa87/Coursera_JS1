/**
* @param {Number} hours
* @param {Number} minutes
* @param {Number} interval
* @returns {String}
*/
/*module.exports =function (hours, minutes, interval) {
	if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59){
		var hoursRemain = (hours + Math.floor((minutes + interval) / 60)) % 24;
		var minutesRemain = (minutes + interval) % 60;
		
	if (hoursRemain < 10) {
		hoursRemain = '0' + hoursRemain;
	}
	if (minutesRemain < 10) {
		minutesRemain = '0' + minutesRemain;
	}
		return hoursRemain + ':' + minutesRemain

	}

};*/
//Определяем константу с информацией о количестве часов в сутках
var HOURS_PER_DAY = 24;
// Определяем константу с информацией сколько минут в часе
var MINUTES_PER_HOUR = 60;

/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    // Увеличиваем значение минут
    minutes += interval;

    // Увеличиваем значение часов на количество полных часов в интервале
    hours += Math.floor(minutes / MINUTES_PER_HOUR);

    // Так как мы увеличили минуты и часы на весь interval, то
    // мы можем выйти за пределы 60 минут у часа и 24 часов у суток.
    // Исключим эту ситуацию.
    minutes %= MINUTES_PER_HOUR;
    hours %= HOURS_PER_DAY;

    // Используем для формата часов и минут, как в часах 1 -> 01
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    // Возвращаем результат
    return hours + ':' + minutes;
};
