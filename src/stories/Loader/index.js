import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from 'kbc-react-components';

storiesOf('Loader')
  .addWithInfo(
    'KBC - Loader',
    '',
    () => (
      <Loader classNamee="fa-fw" />
    ),
    {
        inline: true,
    }
  )
;
