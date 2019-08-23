import React from 'react';

import { matchesSnapshot } from '../../tests';
import ExternalLink from './ExternalLink';

describe('<ExternalLink />', () => {
  it('ExternalLink - default', () => {
    matchesSnapshot(<ExternalLink href="https://www.keboola.com">keboola.com</ExternalLink>);
  });

  it('ExternalLink - with classname', () => {
    matchesSnapshot(
      <ExternalLink href="https://www.keboola.com" className="btn btn-link">
        keboola.com
      </ExternalLink>
    );
  });

  it('ExternalLink - with random props', () => {
    matchesSnapshot(
      <ExternalLink
        href="https://www.keboola.com"
        className="btn btn-link"
        id="external-link-id-prop"
      >
        keboola.com
      </ExternalLink>
    );
  });
});
