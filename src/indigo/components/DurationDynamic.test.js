import React from 'react';
import moment from 'moment';
import { snapshot } from '../../tests';
import DurationDynamic from './DurationDynamic';

const fakeNow = '2018-11-26T15:11:05+0100';
const fakeNowMs = moment(fakeNow).valueOf();

global.Date.now = jest.fn(() => fakeNowMs);

const timePast = moment()
  .subtract(124, 'seconds')
  .format();

describe('<DurationDynamic />', () => {
  it('should render dynamic 2 min 4 sec', () => {
    snapshot(<DurationDynamic startTime={timePast} />);
  });
});
