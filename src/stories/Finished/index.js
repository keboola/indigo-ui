import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import dayjs from '../../indigo/components/date';
import Finished from '../../indigo/components/Finished';

const now = new Date();
const demoTimestamp = dayjs(now.getTime() - 123456)
  .format('YYYY-MM-DDTHH:mm:ssZZ')
  .toString();

storiesOf('Finished', module)
  .add(
    'Basic Init',
    () => {
      return <Finished endTime={demoTimestamp} showIcon={boolean('showIcon', true)} />;
    },
    {
      info: {
        text:
          'Shows how much time ago event occurred. Shows exact time of event on mouse hover. Accepts prop in datetime string format.',
      },
    }
  )
  .add('No datetime provided', () => {
    return <Finished />;
  });
