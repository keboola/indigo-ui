import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

const fakeDate = "2017-03-28 13:34:08"

storiesOf('Duration')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <span>
            <i className="fa fa-fw fa-clock-o"></i>
            <span>4 min 33 sec</span>
        </span>
    ),
    {
      inline: true,
    }
  )
;
