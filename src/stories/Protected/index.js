import React from 'react';
import { storiesOf } from '@storybook/react';
import Protected from '../../indigo/components/Protected';

storiesOf('Protected', module).add(
  'Protected',
  () => {
    return <Protected>This is my secret</Protected>;
  },
  { info: { text: 'To hide protected content with option to show it.' } }
);
