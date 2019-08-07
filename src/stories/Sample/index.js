import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-bootstrap';
import { select } from '@storybook/addon-knobs';

storiesOf('Sample', module).add(
  'simple Button example',
  () => {
    const bsStyle = select('bsStyle', ['default', 'primary', 'info', 'danger'], 'default');
    return <Button bsStyle={bsStyle}>Click me!</Button>;
  },
  {
    info: {
      text: `
    Example to show possibilities of Storybook.

    - You can read this description thanks to **addon-info** (check **withInfo** method)
    - Also, **inline** param has been set to true to show you source of a story directly
    - And bellow you can find Knobs, so switching prop values is easier
  `,
    },
  }
);
