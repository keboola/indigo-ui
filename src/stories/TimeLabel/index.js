import React from 'react';
import { storiesOf } from '@storybook/react';
import moment from 'moment';

const fakeDate = "2017-03-28 13:34:08"

storiesOf('TimeLabel')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <span title={moment(fakeDate).format("YYYY-MM-DD HH:mm:ss")}>
            <i className="fa fa-fw fa-calendar" />
            {moment(fakeDate).fromNow()}
        </span>
    ),
    {
      inline: true,
    }
  )
;
