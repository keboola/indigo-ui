import React from 'react';

import { snapshot } from "../../tests";
import Protected from './Protected';

describe('<Protected />', () => {
  
  it('Protected - content hidden (default)', () => {
    snapshot(<Protected>This is protected</Protected>);
  });

  // TODO: mock state?

});
