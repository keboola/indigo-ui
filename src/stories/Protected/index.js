import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Protected from '../../indigo/components/Protected';

storiesOf('Protected', module).add(
  'Protected',
  withInfo({
    text: `
        To hide protected content with option to show it.
        `,
    inline: true,
  })(() => {
    return <Protected>This is my secret</Protected>;
  })
);
