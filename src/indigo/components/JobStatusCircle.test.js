import React from 'react';

import { snapshot } from '../../tests';
import JobStatusCircle from './JobStatusCircle';

describe('<JobStatusCircle />', () => {
  it('Job Status - Canceled', () => {
    snapshot(<JobStatusCircle status="canceled" />);
  });

  it('Job Status - Success', () => {
    snapshot(<JobStatusCircle status="success" />);
  });

  it('Job Status - Error', () => {
    snapshot(<JobStatusCircle status="error" />);
  });

  it('Job Status - Warning', () => {
    snapshot(<JobStatusCircle status="processing" />);
  });

  it('Job Status - Terminated', () => {
    snapshot(<JobStatusCircle status="terminated" />);
  });

  it('Job Status - not provided', () => {
    snapshot(<JobStatusCircle />);
  });

  it('Job Status - random status', () => {
    snapshot(<JobStatusCircle status="random-status" />);
  });
});
