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
        'Add Button',
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
;
