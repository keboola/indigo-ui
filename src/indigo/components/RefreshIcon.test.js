import React from 'react';

import { snapshot } from '../../tests';
import RefreshIcon from './RefreshIcon';

describe('<RefreshIcon />', () => {
  it('RefreshIcon - loading', () => {
    snapshot(<RefreshIcon isLoading />);
  });

  it('RefreshIcon - not loading', () => {
    snapshot(<RefreshIcon isLoading={false} />);
  });

  it('RefreshIcon - loading with custom title', () => {
    snapshot(<RefreshIcon isLoading title="Click to reload" />);
  });
});
