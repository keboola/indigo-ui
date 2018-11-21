import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Finished from '../../indigo/components/Finished';

const now = new Date();
const demoTimestamp = new Date(now.getTime() - 123456).toString();

storiesOf('Finished', module).add(
  'Basic Init',
  withInfo({
    text: `
        Shows how much time ago event occured. Shows exact time of event on mouse hover. Accepts prop in datetime string format.
        `,
    inline: true,
  })(() => {
    return <Finished endTime={demoTimestamp}/>;
  })
).add(
  'Finished with icon',
  withInfo({
    inline: true,
  })(() => {
    return <Finished showIcon endTime={demoTimestamp}/>;
  })
).add(
  'No datetime provided',
  withInfo({
    inline: true,
  })(() => {
    return <Finished/>;
  })
);
