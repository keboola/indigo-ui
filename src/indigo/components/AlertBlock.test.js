import React from 'react';

import { snapshot } from '../../tests';
import AlertBlock from './AlertBlock';

describe('<AlertBlock />', () => {
  it('AlertBlock - warning', () => {
    snapshot(
      <AlertBlock title="This is warning" type="warning">
        Warning text
      </AlertBlock>
    );
  });

  it('AlertBlock - danger', () => {
    snapshot(
      <AlertBlock title="This is danger" type="danger">
        Danger text
      </AlertBlock>
    );
  });
});
