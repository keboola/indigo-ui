import React from 'react';
import {storiesOf} from '@storybook/react';
import {Tooltip} from 'react-bootstrap';

storiesOf('Tooltip')
    .addWithInfo(
        'default',
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

;
