import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import dayjs from '../../indigo/components/date';
import Duration from '../../indigo/components/Duration';

const now = new Date();
const demoDatetime1 = dayjs(now)
  .format('YYYY-MM-DDTHH:mm:ssZZ')
  .toString();
const demoDatetime2 = dayjs(now.getTime() + 123456)
  .format('YYYY-MM-DDTHH:mm:ssZZ')
  .toString();
const demoDatetime3 = dayjs(now.getTime() + 123456789)
  .format('YYYY-MM-DDTHH:mm:ssZZ')
  .toString();
const demoSecondCount = 1586.36943;

storiesOf('Duration', module)
  .add(
    'Duration',
    () => {
      return (
        <Duration
          startTime={demoDatetime1}
          endTime={demoDatetime2}
          showIcon={boolean('showIcon', true)}
        />
      );
    },
    {
      info: {
        text:
          ' Static duration component. Renders duration from start till end time given. Accepts props in datetime string format.',
      },
    }
  )
  .add(
    'Duration Dynamic',
    () => {
      return <Duration startTime={demoDatetime1} showIcon={boolean('showIcon', true)} />;
    },
    { info: { text: 'Active duration counter. Renders duration from start time till now.' } }
  )
  .add(
    'Duration only',
    () => {
      return <Duration duration={demoSecondCount} showIcon={boolean('showIcon', true)} />;
    },
    {
      info: {
        text:
          'Only formats and rounds for seconds count given. Accepts props in number format - number of seconds.',
      },
    }
  )
  .add(
    'Duration > 24h',
    () => {
      return (
        <Duration
          startTime={demoDatetime1}
          endTime={demoDatetime3}
          showIcon={boolean('showIcon', true)}
        />
      );
    },
    { info: { text: 'For duration longer than 24h limits the counter.' } }
  )
  .add(
    'Duration - empty state',
    () => {
      return <Duration />;
    },
    { info: { text: 'When no duration and start time given.' } }
  );
