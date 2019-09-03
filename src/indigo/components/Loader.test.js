import React from 'react';

import { matchesSnapshot } from '../../tests';
import Loader from './Loader';

describe('<Loader />', () => {
  it('Loader - default', () => {
    matchesSnapshot(<Loader />);
  });

  it('Loader - with classname', () => {
    matchesSnapshot(<Loader className="additional-class" />);
  });
});
