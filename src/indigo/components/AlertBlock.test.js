import React from 'react';

import { snapshot } from "../../tests";
import AlertBlock from './AlertBlock';

describe('<AlertBlock />', () => {
  it('AlertBlock - warning', () => {
    snapshot(<AlertBlock title="This is warning" style="warning">Warning text</AlertBlock>);
  });

  it('AlertBlock - danger', () => {
    snapshot(<AlertBlock title="This is danger" style="danger">Danger text</AlertBlock>);
  });
});
