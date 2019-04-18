import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ExternalLink from '../../indigo/components/ExternalLink';

storiesOf('ExternalLink', module)
  .add(
    'ExternalLink',
    () => {
      return <ExternalLink href="https://www.keboola.com">keboola.com</ExternalLink>;
    },
    {
      info: {
        text:
          'Renders anchor element with additional *target="_blank"* and *rel="noopener noreferrer"* attributes.',
      },
    }
  )
  .add(
    'ExternalLink - pass props',
    () => {
      return (
        <ExternalLink href="https://www.keboola.com" onMouseOver={action('mouse over')}>
          keboola.com
        </ExternalLink>
      );
    },
    { info: { text: 'Renders anchor element with all passed props.' } }
  );
