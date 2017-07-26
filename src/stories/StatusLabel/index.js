import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from 'react-bootstrap';

storiesOf('Label')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <Label bsStyle="default">Default</Label>
    ),
      {
          inline: true,
      }
  )
;
