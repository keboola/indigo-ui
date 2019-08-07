import React from 'react';
import { storiesOf } from '@storybook/react';

import Loader from '../../indigo/components/Loader';

storiesOf('Loader', module).add(
  'Loader',
  () => {
    return <Loader />;
  },
  { info: { text: 'Show if something is loading.' } }
);
