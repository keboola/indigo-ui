import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'react-bootstrap';

import imageFile from '../../static/keboola-logo.png';
storiesOf('Avatar')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <img src={imageFile} class="kbc-user-avatar" width="40" height="40"/>
    ),
    {
      inline: true,
    }
  )
;
