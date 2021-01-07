import React from 'react';
import moment from 'moment';
import MockDate from 'mockdate';
import { matchesSnapshot } from '../../tests';
import DurationDynamic from './DurationDynamic';

MockDate.set('2018-11-26T15:11:05+0100');

const timePast = moment().subtract(124, 'seconds').format();

describe('<DurationDynamic />', () => {
  it('should render dynamic 2 min 4 sec', () => {
    matchesSnapshot(<DurationDynamic startTime={timePast} />);
  });
});
