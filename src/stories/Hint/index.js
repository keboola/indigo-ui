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
        'KBC - Title classic',
        '',
        () => (
            <span className="fa fa-fw fa-question-circle" title="yaeaeaeaeh"/>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Tooltip',
        '',
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
        'KBC - Popover',
        '',
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

