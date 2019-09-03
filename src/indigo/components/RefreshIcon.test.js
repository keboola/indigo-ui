import React from 'react';

import { matchesSnapshot } from '../../tests';
import RefreshIcon from './RefreshIcon';

describe('<RefreshIcon />', () => {
  it('RefreshIcon - loading', () => {
    matchesSnapshot(<RefreshIcon isLoading />);
  });

  it('RefreshIcon - not loading', () => {
    matchesSnapshot(<RefreshIcon isLoading={false} />);
  });

  it('RefreshIcon - loading with custom title', () => {
    matchesSnapshot(<RefreshIcon isLoading title="Click to reload" />);
  });
});
