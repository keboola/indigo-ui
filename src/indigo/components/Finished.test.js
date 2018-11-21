import React from 'react';
import moment from 'moment';

import { snapshot } from '../../tests';
import Finished from "./Finished";

const now = moment().format('YYYY-MM-DD HH:mm:ss');

describe('<Finished />', () => {
  it('Basic Init', () => {
    snapshot(<Finished endTime={now}/>);
  });

  it('Finished with icon', () => {
    snapshot(<Finished showIcon endTime={now}/>);
  });

  it('No datetime provided', () => {
    snapshot( <Finished/>);
  });
});
