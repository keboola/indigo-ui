import React from 'react';
import { storiesOf } from '@storybook/react';

import StatusCircle from '../../indigo/components/StatusCircle';

storiesOf('StatusCircle', module)
  .add('Status - Success', () => <StatusCircle status="success" />)
  .add('Status - Error', () => <StatusCircle status="error" />)
  .add('Status - Warning', () => <StatusCircle status="warning" />)
  .add('Status - Processing', () => <StatusCircle status="processing" />)
  .add('Status - Terminated', () => <StatusCircle status="terminated" />)
  .add('Status - Cancelled', () => <StatusCircle status="cancelled" />);
