import React from 'react';

import { matchesSnapshot } from '../../tests';
import PanelWithDetails from './PanelWithDetails';

describe('<PanelWithDetails />', () => {
  it('PanelWithDetails - default', () => {
    matchesSnapshot(<PanelWithDetails>content</PanelWithDetails>);
  });

  it('PanelWithDetails - default expanded', () => {
    matchesSnapshot(<PanelWithDetails defaultExpanded>content</PanelWithDetails>);
  });

  it('PanelWithDetails - custom labels', () => {
    matchesSnapshot(
      <PanelWithDetails labelOpen="Show" labelCollapse="Hide">
        content
      </PanelWithDetails>
    );
  });

  it('PanelWithDetails - bottom controls', () => {
    matchesSnapshot(<PanelWithDetails placement="bottom">content</PanelWithDetails>);
  });

  it('PanelWithDetails - small preview', () => {
    matchesSnapshot(<PanelWithDetails preview="small">content</PanelWithDetails>);
  });
});
