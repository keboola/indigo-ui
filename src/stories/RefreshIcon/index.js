import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import RefreshIcon from '../../indigo/components/RefreshIcon';
import { boolean } from '@storybook/addon-knobs/dist/index';

storiesOf('RefreshIcon', module).add(
  'RefreshIcon',
  withInfo({
    text: `
        Refresh icon with loader.
        `,
    inline: true,
  })(() => {
    const isLoading = boolean('isLoading', false);
    return <RefreshIcon isLoading={isLoading} />;
  })
);
