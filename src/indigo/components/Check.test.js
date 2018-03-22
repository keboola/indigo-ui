import React from 'react';

import { snapshot } from "../../tests";
import Check from './Check';

describe('<Check />', () => {
  it('Checkbox - checked', () => {
    snapshot(<Check isChecked />);
  });

  it('Checkbox - not checked', () => {
    snapshot(<Check isChecked={false} />);
  });
});
