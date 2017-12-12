import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-bootstrap';
import { select } from '@storybook/addon-knobs';

storiesOf('Sample')
  .addWithInfo(
    'default',
    'Description',
    () => {
      const bsStyle = select('bsStyle', ['default', 'primary', 'info', 'danger'], 'default');
      return (
        <Button bsStyle={bsStyle}>Button</Button>
      )
    },
    {
      inline: true,
    }
  )
;
