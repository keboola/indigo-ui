import React from 'react';

import { matchesSnapshot } from '../../tests';
import Check from './Check';

describe('<Check />', () => {
  it('Checkbox - checked', () => {
    matchesSnapshot(<Check isChecked />);
  });

  it('Checkbox - not checked', () => {
    matchesSnapshot(<Check isChecked={false} />);
  });
});
