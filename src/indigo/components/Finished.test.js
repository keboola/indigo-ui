import React from 'react';
import MockDate from 'mockdate';
import dayjs from './date';
import { matchesSnapshot } from '../../tests';
import Finished from './Finished';

MockDate.set('2018-11-26T15:11:05');

const timePast = dayjs().subtract(124, 'seconds').format();

describe('<Finished />', () => {
  it('Basic Init', () => {
    matchesSnapshot(<Finished endTime={timePast} />);
  });

  it('Finished with icon', () => {
    matchesSnapshot(<Finished showIcon endTime={timePast} />);
  });

  it('No datetime provided', () => {
    matchesSnapshot(<Finished />);
  });
});
