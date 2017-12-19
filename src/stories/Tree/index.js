import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { fromJS } from 'immutable';

import Tree from '../../indigo/components/Tree';

storiesOf('Tree', module)
  .add(
    'Tree - simple structure',
    withInfo({
      text: `
        Render Immutable data structure as unordered list.
        `,
      inline: true,
    })(() => {
      return (
        <Tree
          data={fromJS({
            config: '337955292',
            component: 'keboola.ex-db-mysql',
            mode: 'run',
          })}
        />
      );
    })
  )
  .add(
    'Tree - advanced structure',
    withInfo({
      text: `
        Render Immutable data structure as unordered list.
        `,
      inline: true,
    })(() => {
      return (
        <Tree
          data={fromJS({
            config: '337955292',
            component: 'keboola.ex-db-mysql',
            mode: 'run',
            options: {
              username: 'user',
              password: 'nbusr123',
            },
            ui: {
              flags: ['deprecated', 'deleted', 'obsolete'],
            },
          })}
        />
      );
    })
  );
