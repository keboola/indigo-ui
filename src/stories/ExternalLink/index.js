import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from "@storybook/addon-actions";

import ExternalLink from '../../indigo/components/ExternalLink';

storiesOf('ExternalLink', module).add(
  'ExternalLink',
  withInfo({
    text: `
        Renders anchor element with additional *target="_blank"* and *rel="noopener noreferrer"* attributes.
        `,
    inline: true,
  })(() => {
    return <ExternalLink href="https://www.keboola.com">keboola.com</ExternalLink>;
  })
)
  .add(
    'ExternalLink - pass props',
    withInfo({
      text: `
        Renders anchor element with all passed props.
        `,
      inline: true,
    })(() => {
      return (
        <ExternalLink
          href="https://www.keboola.com"
          onMouseOver={action('mouse over')}
        >
          keboola.com
        </ExternalLink>
      );
    })
  );
