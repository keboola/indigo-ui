import React from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from 'react-bootstrap';

import imageFile from '../../static/keboola-logo.png';

storiesOf('Checkbox')
  .addWithInfo(
    'default',
    'Desc',
    () => (
       <Checkbox>Remember me</Checkbox>
    )
  )
;
