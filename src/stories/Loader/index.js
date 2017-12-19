import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Loader from '../../indigo/components/Loader';

storiesOf('Loader', module).add(
  'Loader',
  withInfo({
    text: `
      Show if something is loading.
      `,
    inline: true,
  })(() => {
    return <Loader />;
  })
);
