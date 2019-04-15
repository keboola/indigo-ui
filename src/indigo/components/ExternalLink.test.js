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

  it('ExternalLink - with random props', () => {
    snapshot(
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
