import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';

import Check from '../../indigo/components/Check';

storiesOf('Check', module).add(
  'Check',
  () => {
    const bsStyle = boolean('isChecked', true);
    return <Check isChecked={bsStyle} />;
  },
  { info: { text: 'Show if something is enabled or not.' } }
);
