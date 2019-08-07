import React from 'react';
import { storiesOf } from '@storybook/react';

import JobStatusCircle from '../../indigo/components/JobStatusCircle';

storiesOf('JobStatusCircle', module)
  .add('Job Status - Success', () => {
    return <JobStatusCircle status="success" />;
  })
  .add('Job Status - Error', () => {
    return <JobStatusCircle status="error" />;
  })
  .add('Job Status - Warning', () => {
    return <JobStatusCircle status="processing" />;
  })
  .add('Job Status - Cancelled', () => {
    return <JobStatusCircle status="cancelled" />;
  });
