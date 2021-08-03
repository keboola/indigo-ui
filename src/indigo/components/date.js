import dayjs from 'dayjs';
import RelativeTime from 'dayjs/plugin/relativeTime';

if (!dayjs.prototype.fromNow) dayjs.extend(RelativeTime);

export default dayjs;
