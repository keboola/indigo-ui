import moment from 'moment';

var format =  function (date, formatPattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(date).format(formatPattern);
}

var fromNow = function (date) {
    return moment(date).fromNow();
}

module.exports = {
    format: format,
    fromNow: fromNow
};