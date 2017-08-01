import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tooltip, Popover, OverlayTrigger, Button} from 'react-bootstrap';


const popoverClickRootClose = (
    <Popover id="popover-trigger-click-root-close" title="Popover bottom">
        <strong>Holy guacamole!</strong> Check this info.
    </Popover>
);

storiesOf('Hint')
    .addWithInfo(
        'tolltip',
        'Desc',
        () => (
            <Tooltip placement="top" className="in">
                Tooltip top
            </Tooltip>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'classic browser title',
        'Desc',
        () => (
            <span className="fa fa-fw fa-question-circle" title="yaeaeaeaeh"/>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'Popover',
        'Desc',
        () => (
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={popoverClickRootClose}>
                <Button>Click w/rootClose</Button>
            </OverlayTrigger>
        ),
        {
            inline: true,
        }
    )
;

