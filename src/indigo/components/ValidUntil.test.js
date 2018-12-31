import React from 'react';
import {snapshot} from '../../tests';
import ValidUntil from './ValidUntil';

const timePast = 1546206044398;
const timeFuture = 1546306044398;

describe('<ValidUntil />', () => {
  it("should render '15 hours ago'", () => {
    snapshot(<ValidUntil validUntil={timePast} />);
  });
  it("should render 'any time now'", () => {
    snapshot(<ValidUntil validUntil={timeFuture} />);
  });
  it("should render 'N/A'", () => {
    snapshot(<ValidUntil />);
  });
});
