import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-bootstrap';

storiesOf('Avatar')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <img src="" class="kbc-user-avatar" width="40" height="40"/>
    ),
    {
      inline: true,
    }
  )
;
