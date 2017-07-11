import React from 'react';
import { storiesOf } from '@storybook/react';
import { Label } from 'react-bootstrap';

import imageFile from '../../static/keboola-logo.png';

storiesOf('Label')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <Label bsStyle="default">Default</Label>
    )
  )
;
