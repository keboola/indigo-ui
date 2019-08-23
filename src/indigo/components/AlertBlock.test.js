import React from 'react';

import { matchesSnapshot } from '../../tests';
import AlertBlock from './AlertBlock';

describe('<AlertBlock />', () => {
  it('AlertBlock - warning', () => {
    matchesSnapshot(
      <AlertBlock title="This is warning" type="warning">
        Warning text
      </AlertBlock>
    );
  });

  it('AlertBlock - danger', () => {
    matchesSnapshot(
      <AlertBlock title="This is danger" type="danger">
        Danger text
      </AlertBlock>
    );
  });
});
