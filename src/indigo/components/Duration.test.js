import React from 'react';
import { snapshot } from '../../tests';
import Duration from "./Duration";
import moment from "moment";

const time1 = '2018-11-26T15:11:05+0100';
const time2 = '2018-11-26T15:11:09+0100';
const time3 = '2018-11-29T15:11:09+0100';

const fakeTimeNow = moment().valueOf()
global.Date.now = jest.fn(() => fakeTimeNow);
const timePast = moment(fakeTimeNow - 123456).format('YYYY-MM-DDTHH:MM:ssZZ').toString();

describe('<Duration />', () => {
  it('Duration', () => {
    snapshot(<Duration startTime={time1} endTime={time2}/>);
  });

  it('Duration Dynamic', () => {
    snapshot(<Duration startTime={timePast}/>);
  });

  it('Duration only', () => {
    snapshot(<Duration duration={1586.36943}/>);
  });

  it('Duration > 24h', () => {
    snapshot(<Duration startTime={time1} endTime={time3}/>);
  });

  it('Duration with icon', () => {
    snapshot(<Duration startTime={time1} endTime={time2} showIcon/>);
  });
  it('Duration - empty state', () => {
    snapshot(<Duration />);
  });
});


