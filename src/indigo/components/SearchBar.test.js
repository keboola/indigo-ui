import React from 'react';

import { snapshot } from "../../tests";
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  
  it('SearchBar', () => {
    snapshot(<SearchBar />);
  });

  it('SearchBar - inverse theme', () => {
    snapshot(<SearchBar theme="inverse" />);
  });

});
