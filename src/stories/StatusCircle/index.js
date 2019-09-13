import React from 'react';
import { storiesOf } from '@storybook/react';

import StatusCircle from '../../indigo/components/StatusCircle';

storiesOf('StatusCircle', module)
  .add('Status - Success', () => {
    return <StatusCircle status="success" />;
  })
  .add('Status - Error, Warning', () => {
    return <StatusCircle status="error" />;
  })
  .add('Status - Processing', () => {
    return <StatusCircle status="processing" />;
  })
  .add('Status - Cancelled, Terminated', () => {
    return <StatusCircle status="cancelled" />;
  });
