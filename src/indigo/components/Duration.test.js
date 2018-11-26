import React from 'react';

import { snapshot } from '../../tests';
import Duration from "./Duration";
import moment from "moment";



const DATE_NOW = '2018-11-26T15:11:05+0100';

const DATE_FUTURE_1 = '2018-11-26T15:11:09+0100';
const DATE_FUTURE_2 = '2018-11-29T15:11:09+0100';



global.Date.now = jest.fn(() => moment().valueOf());
const DATE_PAST = moment(new Date().getTime() -123456).format('YYYY-MM-DDTHH:MM:ssZZ').toString();


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


