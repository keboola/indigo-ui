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
        'New button',
        'Use case: click on New button will redirect you to a form where you configure new entity.',
        () => (
            <Button bsStyle="success">
                <i className="kbc-icon-plus"/>
                New [entity]
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'Add button',
        'Use case: click on Add button will create new entity from pre-filled values.',
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
        'Edit button',
        'Desc',
        () => (
            <Button bsStyle="edit">
                <i className="fa fa-fw fa-pencil"/>
                Edit [entity]
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
