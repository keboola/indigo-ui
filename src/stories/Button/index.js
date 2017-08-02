import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';
import ClipboardButton from 'react-clipboard.js';

storiesOf('Button')
    .addWithInfo(
        'default',
        '',
        () => (
            <Button bsStyle="primary">
                Button
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button New',
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
        'KBC - Button New small',
        'Use case: click on "New button" will redirect you to a form where you configure new entity.',
        () => (
            <Button bsStyle="success">
                <i className="kbc-icon-plus"/>
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Create',
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
        'KBC - Button only icon',
        'Desc',
        () => (
            <Button bsStyle="link">
                <i className="fa fa-fw fa-play"/>
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Show more',
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
    .addWithInfo(
        'KBC - Button Authorize',
        'Desc',
        () => (
            <Button bsStyle="success">
                <i className="fa fa-fw fa-user"></i>
                <span>Authorize Account</span>
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Move to trash',
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
    )
    .addWithInfo(
        'KBC - Button Delete',
        'Desc',
        () => (
            <Button type="button" bsStyle="danger">
                Remove [Entity]
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button copy 2 clipboard',
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
    .addWithInfo(
        '🆕 Edit button',
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
        '🆕 Edit button small',
        'Desc',
        () => (
            <Button bsStyle="link">
                <span className="fa fa-pencil"></span>
            </Button>
        ),
        {
            inline: true,
        }
    );