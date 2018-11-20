import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Finished from '../../indigo/components/Finished';

const demoTimestamp = 1542632032608
storiesOf('Finished', module).add(
  'Basic Init',
  withInfo({
    text: `
        Shows how much time ago event occured. Shows exact time of event on mouse hover
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
    return <Finished hasIcon={true} endTime={demoTimestamp}/>;
  })
).add(
  'No datetime provided',
  withInfo({
    inline: true,
  })(() => {
    return <Finished/>;
  })
);
