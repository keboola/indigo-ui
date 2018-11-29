import React from 'react';
import moment from 'moment';
import { snapshot } from '../../tests';
import Finished from "./Finished";

const fakeTimeNow = moment('2018-11-26T16:00:00+0000').valueOf()
global.Date.now = jest.fn(() => fakeTimeNow);
const timePast = moment(fakeTimeNow - 123456).format('YYYY-MM-DDTHH:mm:ssZZ').toString();


describe('<Finished />', () => {
  it('Basic Init', () => {
    snapshot(<Finished endTime={timePast}/>);
  });

  it('Finished with icon', () => {
    snapshot(<Finished showIcon endTime={timePast}/>);
  });

  it('No datetime provided', () => {
    snapshot( <Finished/>);
  });
});


