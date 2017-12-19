import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';

import Check from '../../indigo/components/Check';

storiesOf('Check', module).add(
  'Check',
  withInfo({
    text: `
      Show if something is enabled or not.
      `,
    inline: true,
  })(() => {
    const bsStyle = boolean('isChecked', true);
    return <Check isChecked={bsStyle} />;
  })
);
