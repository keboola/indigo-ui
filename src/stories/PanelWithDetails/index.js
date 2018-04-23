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
    );
