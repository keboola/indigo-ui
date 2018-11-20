import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Duration from '../../indigo/components/Duration';

const date = new Date();
const date2 = new Date(date.getTime() + 123456)

storiesOf('Duration', module).add(
  'Duration',
  withInfo({
    text: `
      Show if something is enabled or not.
      `,
    inline: true,
  })(() => {
    return <Duration startTime={date.toString()} endTime={date2.toString()}  />;
  })
)
  .add(
  'Duration Dynamix',
  withInfo({
    text: `
      Show if something is enabled or not.
      `,
    inline: true,
  })(() => {
    return <Duration startTime={date.toString()} />;
  })
);
