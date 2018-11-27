import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import ConfirmButtons from '../../indigo/components/ConfirmButtons';


storiesOf('ConfirmButtons', module)
  .add(
    'Styles',
    withInfo({
      text: `
        Basic Init
        `,
      inline: true,
    })(() => {
      return (
        <ConfirmButtons/>
      );
    })
  );
