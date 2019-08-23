import React from 'react';

import { matchesSnapshot } from '../../tests';
import NewLineToBr from './NewLineToBr';

describe('<NewLineToBr />', () => {
  it('NewLineToBr - default', () => {
    matchesSnapshot(<NewLineToBr text={'one\ntwo\nthree'} />);
  });

  it('NewLineToBr - no newline', () => {
    matchesSnapshot(<NewLineToBr text="one" />);
  });
});
