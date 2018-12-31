import React from 'react';
import {snapshot} from '../../tests';
import ValidUntil from './ValidUntil';

const fakeTimeNow = new Date(Date.UTC(2018, 4, 23)).valueOf();
const timePast = fakeTimeNow - 5555555;
const timeFuture = fakeTimeNow + 5555555;

global.Date.now = jest.fn(() => fakeTimeNow);

describe('<ValidUntil />', () => {
  it("should render '2 hours'", () => {
    snapshot(<ValidUntil validUntil={timePast} />);
  });
  it("should render 'any time now'", () => {
    snapshot(<ValidUntil validUntil={timeFuture} />);
  });
  it("should render 'N/A'", () => {
    snapshot(<ValidUntil />);
  });
});
