import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-bootstrap';

storiesOf('Button')
  .addWithInfo(
    'default',
    'Desc',
    () => (
      <Button bsStyle="primary">Button</Button>
    ),
    {
      inline: true,
    }
  )
;
