import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

storiesOf('[CSS] Inline button', module).add(
  'Inline button',
  () => {
    return (
      <div>
        <p>
          For more information please{' '}
          <button
            className="btn btn-link btn-link-inline"
            onClick={action('inlined button clicked')}
          >
            contact us
          </button>
          .
        </p>
      </div>
    );
  },
  { info: { text: 'Add **btn-link-inline** class to render inline button which looks like link.' } }
);
