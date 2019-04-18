import React from 'react';
import { storiesOf } from '@storybook/react';
import { fromJS } from 'immutable';

import Tree from '../../indigo/components/Tree';

storiesOf('Tree', module)
  .add(
    'Tree - simple structure',
    () => {
      return (
        <Tree
          data={fromJS({
            config: '337955292',
            component: 'keboola.ex-db-mysql',
            mode: 'run',
          })}
        />
      );
    },
    { info: { text: 'Render Immutable data structure as unordered list.' } }
  )
  .add(
    'Tree - advanced structure',
    () => {
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
    },
    { info: { text: 'Render Immutable data structure as unordered list.' } }
  );
