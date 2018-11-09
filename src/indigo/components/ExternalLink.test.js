import React from 'react';

import { snapshot } from '../../tests';
import ExternalLink from './ExternalLink';

describe('<ExternalLink />', () => {
  it('ExternalLink - default', () => {
    snapshot(<ExternalLink href="https://www.keboola.com">keboola.com</ExternalLink>);
  });

  it('ExternalLink - with classname', () => {
    snapshot(
      <ExternalLink href="https://www.keboola.com" className="btn btn-link">
        keboola.com
      </ExternalLink>
    );
  });

  it('ExternalLink - disabled', () => {
    snapshot(
      <ExternalLink href="https://www.keboola.com" disabled>
        keboola.com
      </ExternalLink>
    );
  });

  it('ExternalLink - onClick', () => {
    snapshot(
      <ExternalLink href="https://www.keboola.com" onClick={() => null}>
        keboola.com
      </ExternalLink>
    );
  });
});
