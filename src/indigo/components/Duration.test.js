import React from 'react';
import moment from 'moment';

import { snapshot } from '../../tests';
import Duration from "./Duration";

describe('<Duration />', () => {
  it('Duration', () => {
    snapshot(<Duration startTime={"2018-11-22 14:16:25"} endTime={"2018-11-22 15:18:27"}/>);
  });

  it('Duration Dynamic', () => {
    snapshot(<Duration startTime={moment(new Date().getTime() - 123456).format('YYYY-MM-DD HH:mm:ss').toString()}/>);
  });

  it('Duration only', () => {
    snapshot(<Duration duration={1586.36943}/>);
  });

  it('Duration > 24h', () => {
    snapshot(<Duration startTime={"2018-11-22 14:16:25"} endTime={"2019-11-22 14:16:25"}/>);
  });

  it('Duration with icon', () => {
    snapshot(<Duration startTime={"2018-11-22 14:16:25"} endTime={"2018-11-22 15:18:27"} showIcon/>);
  });
  it('Duration - empty state', () => {
    snapshot(<Duration />);
  });
});
