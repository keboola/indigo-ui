import React from 'react';
import {snapshot} from '../../tests';
import ValidUntil from './ValidUntil';

const timeNow = new Date('2018-11-26T15:11:09+0100').valueOf();
const timePast = new Date('2018-11-25T15:11:09+0100').valueOf();
const timeFuture = new Date('2018-11-29T15:11:09+0100').valueOf();

global.Date.now = jest.fn(() => timeNow);

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
