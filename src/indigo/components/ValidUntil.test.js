import React from 'react';
import {snapshot} from '../../tests';
import ValidUntil from './ValidUntil';

const now = new Date();
const timePast = now.getTime() - 50000000;
const timeFuture = now.getTime() + 50000000;

global.Date.now = jest.fn(() => now);

describe('<ValidUntil />', () => {
  it('should render `14 hours ago`', () => {
    snapshot(<ValidUntil validUntil={timePast} />);
  });
  it('should render `any time now`', () => {
    snapshot(<ValidUntil validUntil={timeFuture} />);
  });
  it('should render N/A', () => {
    snapshot(<ValidUntil />);
  });
});
