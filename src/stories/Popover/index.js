import React from 'react';
import { Popover } from 'react-bootstrap';
import { storiesOf } from '@storybook/react';

storiesOf('[CSS] Popover', module)
  .add(
    'Popover - basic init',
    () => {
      return (
        <Popover title="Popover Basic" id="popover-basic">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eum exercitationem in
          laborum perspiciatis quasi rerum sunt totam voluptate voluptatem. At atque aut commodi
          excepturi, laborum minima qui quis repellat?
        </Popover>
      );
    },
    { info: { text: 'Basic init of react-bootstrap Popover' } }
  )
  .add(
    'Popover - wide',
    () => {
      return (
        <Popover title="Popover Wide" id="popover-wide" className="popover-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error eum exercitationem in
          laborum perspiciatis quasi rerum sunt totam voluptate voluptatem. At atque aut commodi
          excepturi, laborum minima qui quis repellat?
        </Popover>
      );
    },
    { info: { text: 'Wider variation of Popover suitable for more content' } }
  );
