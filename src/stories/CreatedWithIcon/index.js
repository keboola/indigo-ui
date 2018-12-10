import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import CreatedWithIcon from '../../indigo/components/CreatedWithIcon';

const demoDatetime = "2018-11-07 21:29:36";

storiesOf('CreatedWithIcon', module)
  .add(
    'Relative time',
    withInfo({
      inline: true,
    })(() => {
      return <CreatedWithIcon createdTime={demoDatetime} />;
    })
  )
  
  .add(
    'Absolute time',
    withInfo({
      inline: true,
    })(() => {
      return <CreatedWithIcon createdTime={demoDatetime} relative={false} />;
    })
  )
  
