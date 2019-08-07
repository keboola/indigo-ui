import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import RefreshIcon from '../../indigo/components/RefreshIcon';

storiesOf('RefreshIcon', module).add(
  'RefreshIcon',
  () => {
    const isLoading = boolean('isLoading', false);
    return <RefreshIcon isLoading={isLoading} />;
  },
  { info: { text: 'Refresh icon with loader.' } }
);
