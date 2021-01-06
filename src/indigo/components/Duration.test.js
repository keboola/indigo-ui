import React from 'react';
import moment from 'moment';
import MockDate from 'mockdate';
import { matchesSnapshot } from '../../tests';
import Duration from './Duration';

const time1 = '2018-11-26T15:11:05+0100';
const time2 = '2018-11-26T15:11:09+0100';
const time3 = '2018-11-29T15:11:09+0100';

MockDate.set(time1);

const timePast = moment(moment(time1).valueOf() - 123456)
  .format('YYYY-MM-DDTHH:mm:ssZZ')
  .toString();

describe('<Duration />', () => {
  it('Duration', () => {
    matchesSnapshot(<Duration startTime={time1} endTime={time2} />);
  });

  it('Duration Dynamic', () => {
    matchesSnapshot(<Duration startTime={timePast} />);
  });

  it('Duration Dynamic with icon', () => {
    matchesSnapshot(<Duration startTime={timePast} showIcon />);
  });

  it('Duration only', () => {
    matchesSnapshot(<Duration duration={1586.36943} />);
  });

  it('Duration > 24h', () => {
    matchesSnapshot(<Duration startTime={time1} endTime={time3} />);
  });

  it('Duration with icon', () => {
    matchesSnapshot(<Duration startTime={time1} endTime={time2} showIcon />);
  });
  it('Duration - empty state', () => {
    matchesSnapshot(<Duration />);
  });

  it('should render 12 sec (ignore start time and end time)', () => {
    matchesSnapshot(<Duration duration={12} startTime={time1} endTime={time2} />);
  });
  it('should render 12 sec (ignore start time)', () => {
    matchesSnapshot(<Duration duration={12} startTime={time1} />);
  });
  it('should render 12 sec (ignore end time)', () => {
    matchesSnapshot(<Duration duration={12} endTime={time2} />);
  });
});
