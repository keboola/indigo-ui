import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from 'kbc-react-components';

storiesOf('Loader')
  .addWithInfo(
    'default',
    'Desc',
    () => (
      <Loader classNamee="fa-fw" />
    ),
    {
        inline: true,
    }
  )
;
