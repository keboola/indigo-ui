import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import ValidUntil from '../../indigo/components/ValidUntil';
import { boolean } from '@storybook/addon-knobs';

const now = new Date();
const timePast = now.getTime() - 50000000;
const timeFuture = now.getTime() + 50000000;

storiesOf('ValidUntil', module)
  .add(
    'ValidUntil',
    withInfo({
      inline: true,
    })(() => {
      return <ValidUntil validUntil={timePast} showIcon={boolean('showIcon', true)}/>;
    })
  )
  .add(
    'ValidUntil - valid any time',
    withInfo({
      inline: true,
    })(() => {
      return <ValidUntil validUntil={timeFuture} showIcon={boolean('showIcon', true)}/>;
    })
  )
  .add(
    'ValidUntil - empty state',
    withInfo({
      inline: true,
    })(() => {
      return <ValidUntil showIcon={boolean('showIcon', true)} />;
    })
  );
