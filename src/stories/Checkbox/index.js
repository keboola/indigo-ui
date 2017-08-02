import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from 'react-bootstrap';

storiesOf('Checkbox')
  .addWithInfo(
    '🆕 Checkbox animated',
    'Desc',
    () => (
       <Checkbox>Remember me</Checkbox>
    ),
      {
          inline: true,
      }
  )
;
