import React from 'react';

import { snapshot } from '../../tests';
import Finished from "./Finished";

const DATE_NOW = '2016-01-01T00:05:21+0100';
const DATE_PAST = '2016-01-01T00:00:00+0100';

global.Date.now = jest.fn(() => new Date(DATE_NOW).valueOf());

describe('<Finished />', () => {
  it('Basic Init', () => {
    snapshot(<Finished endTime={DATE_PAST}/>);
  });

  it('Finished with icon', () => {
    snapshot(<Finished showIcon endTime={DATE_PAST}/>);
  });

  it('No datetime provided', () => {
    snapshot( <Finished/>);
  });
});
