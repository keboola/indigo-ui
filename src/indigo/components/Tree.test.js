import React from 'react';
import { fromJS } from 'immutable';

import { snapshot } from '../../tests';
import Tree from './Tree';

describe('<Tree />', () => {
  it('Tree - default', () => {
    snapshot(
      <Tree
        data={fromJS({
          config: '337955292',
          component: 'keboola.ex-db-mysql',
          mode: 'run',
        })}
      />
    );
  });

  it('Tree - with password', () => {
    snapshot(
      <Tree
        data={fromJS({
          config: '337955292',
          component: 'keboola.ex-db-mysql',
          mode: 'run',
          password: 'pass',
        })}
      />
    );
  });
});
