import React from 'react';

import { snapshot } from '../../tests';
import Loader from './Loader';

describe('<Loader />', () => {
  it('Loader - default', () => {
    snapshot(<Loader />);
  });

  it('Loader - with classname', () => {
    snapshot(<Loader className="additional-class" />);
  });
});
