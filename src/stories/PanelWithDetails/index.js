import React from 'react';
import { storiesOf } from '@storybook/react';
import PanelWithDetails from '../../indigo/components/PanelWithDetails';
import { withInfo } from '@storybook/addon-info';


storiesOf('PanelWithDetails', module)
    .add(
        'Basic init',
        withInfo({
            text: `PanelWithDetails serves to reveal more details appended to main content`,
            inline: true,
        })(() => {
            return (
                <PanelWithDetails>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </PanelWithDetails>
            )
        })
    )
    .add(
        'Initially expanded',
        withInfo({
            text: `
        Allows to set intial expanded/collapsed state.
        `,
            inline: true,
        })(() => {
            return (
                <PanelWithDetails
                    defaultExpanded={true}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </PanelWithDetails>
            )
        })
    )
    .add(
        'Custom labels',
        withInfo({
            text: `
        Allows to change labels for both expanded/collapsed state
        `,
            inline: true,
        })(() => {
            return (
                <PanelWithDetails
                    labelCollapse="Less"
                    labelOpen="More"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </PanelWithDetails>
            )
        })
    )
    .add(
        'Bottom controls',
        withInfo({
            text: `
        COntrol label forces to bottom
        `,
            inline: true,
        })(() => {
            return (
                <PanelWithDetails
                    placement="bottom"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </PanelWithDetails>
            )
        })
    )
  .add(
    'List + Bottom controls',
    withInfo({
      text: `
          Example how to hide part of unordered list + bottom controls.
          `,
      inline: true,
    })(() => {
      return (
        <div style={{backgroundColor: '#fff', maxWidth: '240px'}}>
          <h4>Input</h4>
          <ul className="list-no-bottom-margin">
            <li><span className="kbc-sapi-table-link">in.c-csv-import.100</span></li>
            <li><span className="kbc-sapi-table-link">in.c-csv-import.101</span></li>
            <li><span className="kbc-sapi-table-link">in.c-csv-import.102</span></li>
            <li><span className="kbc-sapi-table-link">in.c-csv-import.103</span></li>
            <li><span className="kbc-sapi-table-link">in.c-csv-import.104</span></li>
          </ul>
          <PanelWithDetails
            placement="bottom"
            labelOpen="Show 5 more tables"
            labelCollapse="Show less"
          >
            <ul>
              <li><span className="kbc-sapi-table-link">in.c-csv-import.105</span></li>
              <li><span className="kbc-sapi-table-link">in.c-csv-import.106</span></li>
              <li><span className="kbc-sapi-table-link">in.c-csv-import.107</span></li>
              <li><span className="kbc-sapi-table-link">in.c-csv-import.108</span></li>
              <li><span className="kbc-sapi-table-link">in.c-csv-import.109</span></li>
            </ul>
          </PanelWithDetails>
        </div>
      )
    })
  );
