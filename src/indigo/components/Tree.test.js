import React from 'react';
import { fromJS } from 'immutable';

import { matchesSnapshot } from '../../tests';
import Tree from './Tree';

describe('<Tree />', () => {
  it('Tree - default', () => {
    matchesSnapshot(
      <Tree
        data={fromJS({
          config: '337955292',
          component: 'keboola.ex-db-mysql',
          mode: 'run'
        })}
      />
    );
  });

  it('Tree - with password', () => {
    matchesSnapshot(
      <Tree
        data={fromJS({
          config: '337955292',
          component: 'keboola.ex-db-mysql',
          mode: 'run',
          password: 'pass'
        })}
      />
    );
  });
});
