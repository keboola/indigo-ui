import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

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
);
