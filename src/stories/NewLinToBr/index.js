import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import NewLineToBr from '../../indigo/components/NewLineToBr';

storiesOf('NewLineToBr', module).add(
  'NewLineToBr',
  withInfo({
    text: `
        Split text with newlines.
        `,
    inline: true,
  })(() => {
    return <NewLineToBr text={'Text\nwith\nthree\nnewlines.'} />;
  })
);
