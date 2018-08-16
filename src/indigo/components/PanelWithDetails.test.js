import React from 'react';

import { snapshot } from "../../tests";
import PanelWithDetails from './PanelWithDetails';

describe('<PanelWithDetails />', () => {

  it('PanelWithDetails - default', () => {
    snapshot(
      <PanelWithDetails>
        content
      </PanelWithDetails>
    );
  });

  it('PanelWithDetails - default expanded', () => {
    snapshot(
      <PanelWithDetails defaultExpanded={true}>
        content
      </PanelWithDetails>
    );
  });

  it('PanelWithDetails - custom labels', () => {
    snapshot(
      <PanelWithDetails labelOpen="Show" labelCollapse="Hide">
        content
      </PanelWithDetails>
    );
  });

  it('Bottom controls', () => {
    snapshot(
      <PanelWithDetails placement="bottom">
        content
      </PanelWithDetails>
    );
  });

  it('PanelWithDetails - small preview', () => {
    snapshot(
      <PanelWithDetails preview="small">
        content
      </PanelWithDetails>
    );
  });

});
