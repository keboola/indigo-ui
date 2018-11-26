import React from 'react';
import moment from 'moment';

import { snapshot } from '../../tests';
import Duration from "./Duration";

const DATE_NOW = '2016-01-01T02:00:00+0100';
const DATE_PAST = '2016-01-01T00:00:00+0100';
const DATE_FUTURE_1 = '2016-01-01T02:42:16+0100';
const DATE_FUTURE_2 = '2016-01-21T00:00:00+0100';

global.Date.now = jest.fn(() => new Date(DATE_NOW).valueOf());

describe('<Duration />', () => {
  it('Duration', () => {
    snapshot(<Duration startTime={DATE_NOW} endTime={DATE_FUTURE_1}/>);
  });

  it('Duration Dynamic', () => {
    snapshot(<Duration startTime={DATE_PAST}/>);
  });

  it('Duration only', () => {
    snapshot(<Duration duration={1586.36943}/>);
  });

  it('Duration > 24h', () => {
    snapshot(<Duration startTime={DATE_NOW} endTime={DATE_FUTURE_2}/>);
  });

  it('Duration with icon', () => {
    snapshot(<Duration startTime={DATE_NOW} endTime={DATE_FUTURE_1} showIcon/>);
  });
  it('Duration - empty state', () => {
    snapshot(<Duration />);
  });
});
