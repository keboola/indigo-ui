import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Finished from '../../indigo/components/Finished';
import moment from 'moment';
import { boolean } from '@storybook/addon-knobs';

const now = new Date();
const demoTimestamp = moment(now.getTime() - 123456)
  .format('YYYY-MM-DDTHH:mm:ssZZ')
  .toString();

storiesOf('Finished', module)
  .add(
    'Basic Init',
    withInfo({
      text: `
        Shows how much time ago event occurred. Shows exact time of event on mouse hover. Accepts prop in datetime string format.
        `,
      inline: true
    })(() => {
      return <Finished endTime={demoTimestamp} showIcon={boolean('showIcon', true)} />;
    })
  )
  .add(
    'No datetime provided',
    withInfo({
      inline: true
    })(() => {
      return <Finished />;
    })
  );
