import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'react-bootstrap';

storiesOf('Icons')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div>
            <i className="kbc-icon-transformations"></i>
            <i className="kbc-icon-extractors"></i>
            </div>
        ),
        {
            inline: true,
        }
    )
;
