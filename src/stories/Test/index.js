import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Test')
  .addWithInfo(
    'default',
    'Desc',
    () => (
      <span />
    ),
    {
      inline: true,
    }
  )
;
