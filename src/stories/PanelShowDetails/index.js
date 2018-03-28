import React from 'react';
import {storiesOf} from '@storybook/react';
import {
    Panel
} from 'react-bootstrap';



storiesOf('PanelShowDetails', module)
    .add('PanelShowDetails', () => (
        <Panel
            collapsible
            expanded={false}
            header="Show details"
            className="panel-show-details">
            Anim pariatur cliche reprehenderit, enim eiusmod high life
            accusamus terry richardson ad squid. Nihil anim keffiyeh
            helvetica, craft beer labore wes anderson cred nesciunt sapiente
            ea proident.
        </Panel>
        )
    );
