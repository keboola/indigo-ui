import React from 'react';
import { storiesOf } from '@storybook/react';

import NewLineToBr from '../../indigo/components/NewLineToBr';

storiesOf('NewLineToBr', module).add(
  'NewLineToBr',
  () => {
    return <NewLineToBr text={'Text\nwith\nthree\nnewlines.'} />;
  },
  { info: { text: 'Split text with newlines.' } }
);
