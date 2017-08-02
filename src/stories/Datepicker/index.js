import React from 'react';
import DatePicker from 'react-datepicker';
import {storiesOf} from '@storybook/react';
import moment from 'moment';

const fakeDate = "2017-03-28 13:34:08"

storiesOf('Datepicker')
    .addWithInfo(
        '🆕 Datepicker for Orchestrator',
        'https://github.com/Hacker0x01/react-datepicker',
        () => (
            <DatePicker
                selected={moment(fakeDate)}
                onChange={console.log('changed')}
            />
        ),
        {
            inline: true,
        }
    );