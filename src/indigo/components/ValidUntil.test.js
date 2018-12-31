import React from 'react';
import {snapshot} from '../../tests';
import ValidUntil from './ValidUntil';

const timeNow = 1546256044398;
const timePast = 1546206044398;
const timeFuture = 1546306044398;

global.Date.now = jest.fn(() => timeNow);

describe('<ValidUntil />', () => {
  it("should render '14 hours ago'", () => {
    snapshot(<ValidUntil validUntil={timePast} />);
  });
  it("should render 'any time now'", () => {
    snapshot(<ValidUntil validUntil={timeFuture} />);
  });
  it("should render 'N/A'", () => {
    snapshot(<ValidUntil />);
  });
});
