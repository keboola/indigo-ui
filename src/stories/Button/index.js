import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';

storiesOf('Button')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <Button bsStyle="primary">Button</Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'with icon',
        'Desc',
        () => (
            <Button bsStyle="primary">
                <i className="fa fa-times"></i>
                Button
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'Add button',
        'Desc',
        () => (
            <Button bsStyle="success">
                <i className="kbc-icon-plus"/>
                Add [entity]
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'icon button',
        'Desc',
        () => (
            <Button bsStyle="link">
                <i className="fa fa-fw fa-play"/>
            </Button>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
        'show more',
        'Desc',
        () => (
            <Button bsStyle="btn-default">
                show more ...
            </Button>
        ),
        {
            inline: true,
        }
    )
;
