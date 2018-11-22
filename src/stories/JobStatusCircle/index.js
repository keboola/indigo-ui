import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import JobStatusCircle from '../../indigo/components/JobStatusCircle';

storiesOf('JobStatusCircle', module).add(
  'Job Status - Success',
  withInfo({
    inline: true,
  })(() => {
    return <JobStatusCircle status="success"/>;
  })
).add(
  'Job Status - Error',
  withInfo({
    inline: true,
  })(() => {
    return <JobStatusCircle status="error"/>;
  })
).add(
  'Job Status - Warning',
  withInfo({
    inline: true,
  })(() => {
    return <JobStatusCircle status="processing"/>;
  })
).add(
  'Job Status - Cancelled',
  withInfo({
    inline: true,
  })(() => {
    return <JobStatusCircle status="cancelled"/>;
  })
);
