import React from 'react';
import { storiesOf } from '@storybook/react';
import CreatedWithIcon from '../../common/CreatedWithIcon.jsx';

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
//     .addWithInfo(
//     'synced ago',
//     'Desc',
//     () => (
//         <span title={"synced " + moment(fakeDate).format("YYYY-MM-DD HH:mm:ss")}>
//             <i className="fa fa-fw fa-refresh" />
//             {date.format(fakeDate).fromNow()}
//         </span>
//     ),
//     {
//       inline: true,
//     }
//   ) .addWithInfo(
//     'duration',
//     'Desc',
//     () => (
//         <span>
//             <i className="fa fa-fw fa-clock-o"></i>
//             <span>4 min 33 sec</span>
//         </span>
//     ),
//     {
//         inline: true,
//     }
// )
// ;




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
