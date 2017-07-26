import React from 'react';
import { storiesOf } from '@storybook/react';
import { Radio } from 'react-bootstrap';

storiesOf('Radio')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <span>
        <Radio name="radioGroup">
            1
        </Radio>
        <Radio name="radioGroup">
            2
        </Radio>
        <Radio name="radioGroup" >
            3
        </Radio>
            </span>
    ),
      {
          inline: true,
      }
  )
;
