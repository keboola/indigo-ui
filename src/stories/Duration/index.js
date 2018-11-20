import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Duration from '../../indigo/components/Duration';

const now = new Date();
const demoDatetime1 = now.toString();
const demoDatetime2 = new Date(now.getTime() + 123456).toString();
const demoDatetime3 = new Date(now.getTime() + 123456789).toString();

storiesOf('Duration', module)
  .add(
    'Duration',
    withInfo({
      text: `
      Static duration component for start and end time set. Accepts props in datetime string format.
      `,
      inline: true,
    })(() => {
      return <Duration startTime={demoDatetime1} endTime={demoDatetime2}/>;
    })
  )
  .add(
    'Duration > 24h',
    withInfo({
      text: `
      Static duration component for start and end time set. Accepts props in datetime string format.
      `,
      inline: true,
    })(() => {
      return <Duration startTime={demoDatetime1} endTime={demoDatetime3}/>;
    })
  )
  .add(
    'Duration Dynamic',
    withInfo({
      text: `
      Active duration counter. Counts from start time given till 24h. Accepts props in datetime string format.
      `,
      inline: true,
    })(() => {
      return <Duration startTime={demoDatetime1}/>;
    })
  );
