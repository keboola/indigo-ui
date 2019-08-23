import React from 'react';

import { matchesSnapshot } from '../../tests';
import Protected from './Protected';

describe('<Protected />', () => {
  it('Protected - content hidden (default)', () => {
    matchesSnapshot(<Protected>This is protected</Protected>);
  });

  // TODO: mock state?
});
