import React from 'react';
import moment from 'moment';
import { snapshot } from '../../tests';
import CreatedWithIcon from './CreatedWithIcon';

const time1 = '2018-11-26T15:11:05';

const fakeTimeNow = moment(time1).valueOf();
global.Date.now = jest.fn(() => fakeTimeNow);
const timePast = moment(fakeTimeNow - 123456)
  .format('YYYY-MM-DDTHH:mm')
  .toString();

describe('<CreatedWithIcon />', () => {
  it('Relative time', () => {
    snapshot(<CreatedWithIcon createdTime={timePast} />);
  });

  it('Absolute time', () => {
    snapshot(<CreatedWithIcon createdTime={timePast} relative={false} />);
  });
});
