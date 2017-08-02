import React from 'react';
import {storiesOf} from '@storybook/react';
import {Image} from 'react-bootstrap';

import imageFile from '../../static/keboola-logo.png';

storiesOf('Image')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <Image src={imageFile} rounded/>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Avatar',
        'Desc',
        () => (
            <Image src={imageFile} rounded width="40" height="40"/>
        ),
        {
            inline: true,
        }
    ),
{
    inline: true,
}

;
