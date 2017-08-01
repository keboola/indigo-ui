import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';
import ClipboardButton from 'react-clipboard.js';

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
        'Use case: click on "New button" will redirect you to a form where you configure new entity.',
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
        'Create button',
        'Use case: click on "Create button" will create new entity from pre-filled values.',
        () => (
            <Button bsStyle="success">
                Create [entity]
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
        'Edit button small',
        'Desc',
        () => (
            <Button bsStyle="link" >
                <span className="fa fa-pencil" ></span>
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
).addWithInfo(
    'Authorize',
    'Desc',
    () => (
        <Button bsStyle="success" >
            <i className="fa fa-fw fa-user"></i>
            <span>Authorize Account</span>
        </Button>
    ),
    {
        inline: true,
    }
).addWithInfo(
    'move to trash',
    'Desc',
    () => (
        <a >
            <span className="kbc-icon-cup fa fa-fw"></span>
            <span> Move to Trash</span>
        </a>
    ),
    {
        inline: true,
    }
).addWithInfo(
    'delete',
    'Desc',
    () => (
            <Button type="button" bsStyle="danger" >
                Remove [Entity]
            </Button>
    ),
    {
        inline: true,
    }
).addWithInfo(
    'copy 2 clipboard',
    'Desc',
    () => (
        <ClipboardButton data-clipboard-text='test text test text test text test text '>
            <span className="fa fa-fw fa-copy"/> Copy 2 clipboard
        </ClipboardButton>
    ),
    {
        inline: true,
    }
)
;
