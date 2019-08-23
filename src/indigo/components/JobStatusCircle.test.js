import React from 'react';

import { matchesSnapshot } from '../../tests';
import JobStatusCircle from './JobStatusCircle';

describe('<JobStatusCircle />', () => {
  it('Job Status - Cancelled', () => {
    matchesSnapshot(<JobStatusCircle status="cancelled" />);
  });

  it('Job Status - Success', () => {
    matchesSnapshot(<JobStatusCircle status="success" />);
  });

  it('Job Status - Error', () => {
    matchesSnapshot(<JobStatusCircle status="error" />);
  });

  it('Job Status - Warning', () => {
    matchesSnapshot(<JobStatusCircle status="processing" />);
  });

  it('Job Status - Terminated', () => {
    matchesSnapshot(<JobStatusCircle status="terminated" />);
  });

  it('Job Status - not provided', () => {
    matchesSnapshot(<JobStatusCircle />);
  });

  it('Job Status - random status', () => {
    matchesSnapshot(<JobStatusCircle status="random-status" />);
  });
});
