import moment from 'moment';

module.exports = {
    format(date, format = 'YYYY-MM-DD HH:mm:ss') {
        return moment(date).format(format);
    }
};