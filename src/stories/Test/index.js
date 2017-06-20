import React from 'react';
import { storiesOf } from '@storybook/react';
import Test from '../../components/Test';

storiesOf('Test')
  .addWithInfo(
    'default',
    'Desc',
    () => (
      <Test text="some text" />
    ),
    {
      inline: true,
    }
  )
;
