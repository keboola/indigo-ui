import React from 'react';

import { matchesSnapshot } from '../../tests';
import StatusCircle from './StatusCircle';

describe('<StatusCircle />', () => {
  it('Status - Cancelled', () => {
    matchesSnapshot(<StatusCircle status="cancelled" />);
  });

  it('Status - Success', () => {
    matchesSnapshot(<StatusCircle status="success" />);
  });

  it('Status - Error', () => {
    matchesSnapshot(<StatusCircle status="error" />);
  });

  it('Status - Warning', () => {
    matchesSnapshot(<StatusCircle status="processing" />);
  });

  it('Status - Terminated', () => {
    matchesSnapshot(<StatusCircle status="terminated" />);
  });

  it('Status - not provided', () => {
    matchesSnapshot(<StatusCircle />);
  });

  it('Status - random status', () => {
    matchesSnapshot(<StatusCircle status="random-status" />);
  });
});
