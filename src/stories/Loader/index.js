import React from 'react';
import { storiesOf } from '@storybook/react';
import { Loader } from 'kbc-react-components';
import { Image } from 'react-bootstrap';
import BubbleLoader from '../../static/bubble-loader.svg';


storiesOf('Loader')
  .addWithInfo(
    'KBC - Loader',
    '',
    () => (
      <Loader classNamee="fa-fw" />
    ),
    {
        inline: true,
    }
  )
    .addWithInfo(
    '🆕  Bubble Loader',
    '',
    () => (
      <div className="bubble-loader">
        <Image src={BubbleLoader}/>
          <p>Loading</p>
      </div>

    ),
    {
        inline: true,
    }
  )
;
