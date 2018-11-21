import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Duration from '../../indigo/components/Duration';

const now = new Date();
const demoDatetime1 = now.toString();
const demoDatetime2 = new Date(now.getTime() + 123456).toString();
const demoDatetime3 = new Date(now.getTime() + 123456789).toString();
const demoSecondCount = 1586.36943;

storiesOf('Duration', module)
  .add(
    'Duration',
    withInfo({
      text: `
      Static duration component. Renders duration from start till end time given. Accepts props in datetime string format.
      `,
      inline: true,
    })(() => {
      return <Duration startTime={demoDatetime1} endTime={demoDatetime2}/>;
    })
  )
  .add(
    'Duration Dynamic',
    withInfo({
      text: `
      Active duration counter. Renders duration from start time till now.
      `,
      inline: true,
    })(() => {
      return <Duration startTime={demoDatetime1}/>;
    })
  )
  .add(
    'Duration only',
    withInfo({
      text: `
      Only formats and rounds for seconds count given. Accepts props in number format - number of seconds.
      `,
      inline: true,
    })(() => {
      return <Duration duration={demoSecondCount}/>;
    })
  )
  .add(
    'Duration > 24h',
    withInfo({
      text: `
      For duration longer than 24h limits the counter.
      `,
      inline: true,
    })(() => {
      return <Duration startTime={demoDatetime1} endTime={demoDatetime3}/>;
    })
  )
  .add(
    'Duration with icon',
    withInfo({
      text: `
      Adds icon in front of text.
      `,
      inline: true,
    })(() => {
      return <Duration startTime={demoDatetime1} endTime={demoDatetime2} showIcon/>;
    })
  )
  .add(
    'Duration - empty state',
    withInfo({
      text: `
      When no duration and start time given.
      `,
      inline: true,
    })(() => {
      return <Duration />;
    })
  );
