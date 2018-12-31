import React from 'react';
import moment from 'moment';
import {snapshot} from '../../tests';
import ValidUntil from './ValidUntil';

const fakeNow = '2018-11-26T15:11:05+0000';
const fakeNowMs = moment(fakeNow).valueOf();

global.Date.now = jest.fn(() => fakeNowMs);

const timePast = moment()
  .subtract(124, 'seconds')
  .valueOf()

const timeFuture = moment()
  .add(124, 'seconds')
  .valueOf()

describe('<ValidUntil />', () => {
  it("should render '2 minutes ago'", () => {
    snapshot(<ValidUntil validUntil={timePast} />);
  });
  it("should render 'any time now'", () => {
    snapshot(<ValidUntil validUntil={timeFuture} />);
  });
  it("should render 'N/A'", () => {
    snapshot(<ValidUntil />);
  });
});
