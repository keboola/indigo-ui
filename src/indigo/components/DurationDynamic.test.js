import React from 'react';
import MockDate from 'mockdate';
import dayjs from './date';
import { matchesSnapshot } from '../../tests';
import DurationDynamic from './DurationDynamic';

MockDate.set('2018-11-26T15:11:05+0100');

const timePast = dayjs().subtract(124, 'seconds').format();

describe('<DurationDynamic />', () => {
  it('should render dynamic 2 min 4 sec', () => {
    matchesSnapshot(<DurationDynamic startTime={timePast} />);
  });
});
