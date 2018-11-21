import React from 'react';
import moment from 'moment';

import { snapshot } from '../../tests';
import Finished from "./Finished";

const DATE_TO_USE = new Date('2016');
const _Date = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.n
const timeMock = moment(DATE_TO_USE).format('YYYY-MM-DD HH:mm:ss').toString()

describe('<Finished />', () => {
  it('Basic Init', () => {
    snapshot(<Finished endTime={timeMock}/>);
  });

  it('Finished with icon', () => {
    snapshot(<Finished showIcon endTime={timeMock}/>);
  });

  it('No datetime provided', () => {
    snapshot( <Finished/>);
  });
});
