import React from 'react';

import { snapshot } from '../../tests';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('SearchBar', () => {
    snapshot(<SearchBar />);
  });

  it('SearchBar - inverse theme', () => {
    snapshot(<SearchBar theme="inverse" />);
  });

  it('SearchBar - with one additional button', () => {
    snapshot(<SearchBar additionalActions={<button className="btn btn-default">Submit</button>} />);
  });

  it('SearchBar - with two additional buttons', () => {
    snapshot(
      <SearchBar
        additionalActions={[
          <button key="submit-button" className="btn btn-primary">
            Submit
          </button>,
          <button key="reset-button" className="btn btn-default">
            Reset
          </button>,
        ]}
      />
    );
  });
});
