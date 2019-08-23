import React from 'react';

import { matchesSnapshot } from '../../tests';
import SearchBar from './SearchBar';

describe('<SearchBar />', () => {
  it('SearchBar', () => {
    matchesSnapshot(<SearchBar onChange={() => null} />);
  });

  it('SearchBar - inverse theme', () => {
    matchesSnapshot(<SearchBar onChange={() => null} theme="inverse" />);
  });

  it('SearchBar - with one additional button', () => {
    matchesSnapshot(
      <SearchBar
        onChange={() => null}
        additionalActions={<button className="btn btn-default">Submit</button>}
      />
    );
  });

  it('SearchBar - with two additional buttons', () => {
    matchesSnapshot(
      <SearchBar
        onChange={() => null}
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
