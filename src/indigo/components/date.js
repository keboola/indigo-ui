import moment from 'moment';

const format = (date, scheme = 'YYYY-MM-DD HH:mm:ss') => moment(date).format(scheme);

export default {
  format,
};
