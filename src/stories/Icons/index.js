import React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from 'react-bootstrap';

import imageFile from '../../static/keboola-logo.png';

storiesOf('Icons')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div>
            <i class="kbc-icon-transformations"></i>
            <i class="kbc-icon-extractors"></i>
            </div>
        ),
        {
            inline: true,
        }
    )
;
