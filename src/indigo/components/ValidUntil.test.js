import React from 'react';
import moment from 'moment';
import {snapshot} from '../../tests';
import ValidUntil from './ValidUntil';

const fakeTimeNow = moment('2018-11-26T15:11:05+0000').valueOf();
const timePast = moment('2018-11-25T15:11:09+0000').valueOf();
const timeFuture = moment('2018-11-29T15:09:09+0000').valueOf();

global.Date.now = jest.fn(() => fakeTimeNow);

describe('<ValidUntil />', () => {
  it("should render 'a day ago'", () => {
    snapshot(<ValidUntil validUntil={timePast} />);
  });
  it("should render 'any time now'", () => {
    snapshot(<ValidUntil validUntil={timeFuture} />);
  });
  it("should render 'N/A'", () => {
    snapshot(<ValidUntil />);
  });
});
