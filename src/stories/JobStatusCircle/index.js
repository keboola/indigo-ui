import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import JobStatusCircle from '../../indigo/components/JobStatusCircle';

storiesOf('JobStatusCircle', module).add(
  'Job Status - Default',
  withInfo({
    inline: true,
  })(() => {
    return <JobStatusCircle status="default"/>;
  })
).add(
  'Job Status - Success',
  withInfo({
    inline: true,
  })(() => {
    return <JobStatusCircle status="success"/>;
  })
).add(
  'Job Status - Danger',
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
);
