import React from 'react';
import { storiesOf } from '@storybook/react';
import { Panel } from 'react-bootstrap';
import { withInfo } from '@storybook/addon-info';

storiesOf('[CSS] Panel', module).add(
  'panel-show-details',
  withInfo({
    text: `
        Add *className="panel-show-details"* to use Panel as "Show more/Show details" component.
        `,
    inline: true,
  })(() => {
    return <Panel
      collapsible
      header="Show details"
      className="panel-show-details"
    >
      Anim pariatur cliche reprehenderit, enim eiusmod high life
      accusamus terry richardson ad squid. Nihil anim keffiyeh
      helvetica, craft beer labore wes anderson cred nesciunt sapiente
      ea proident.
    </Panel>;
  })
);
