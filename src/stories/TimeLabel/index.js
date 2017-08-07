import React from 'react';
import {storiesOf} from '@storybook/react';
import CreatedWithIcon from '../../static/common/CreatedWithIcon.jsx';
import TimeLabelSynced from '../../static/common/TimeLabelSynced.jsx';

const fakeDate = "2017-03-28 13:34:08"

storiesOf('TimeLabel')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <CreatedWithIcon createdTime={fakeDate}/>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'synced ago',
        'Desc',
        () => (
            <TimeLabelSynced createdTime={fakeDate}/>
        ),
        {
            inline: true,
        }
    )
    // .addWithInfo(
    //     'duration',
    //     'Desc',
    //     () => (
    //     <TimeLabelDuration startTime={fakeDate} endTime="2017-03-28 13:52:08"/>
    //
    //     ),
    //     {
    //         inline: true,
    //     }
    // )
;


//
// storiesOf('TimeLabel')
//     .addWithInfo(
//         'default',
//         'Desc',
//         () => (
//             <span title={datum.format(fakeDate)}>
//             <i className="fa fa-fw fa-calendar" />
//             test
//         </span>
//         ),
//         {
//             inline: true,
//         }
//     )
// ;
