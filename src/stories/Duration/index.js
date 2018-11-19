import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Duration from '../../indigo/components/Duration';

storiesOf('Duration', module).add(
  'Duration',
  withInfo({
    text: `
      Show if something is enabled or not.
      `,
    inline: true,
  })(() => {
    return <Duration endTime={56500000} startTime={56545465} />;
  })
);
