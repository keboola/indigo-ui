import React from 'react';

import { snapshot } from '../../tests';
import JobStatusCircle from "./JobStatusCircle";

describe('<JobStatusCircle />', () => {
  it('Job Status - Cancelled', () => {
    snapshot(<JobStatusCircle status="cancelled" />);
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
});

