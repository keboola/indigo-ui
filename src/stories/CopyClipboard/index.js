import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';
import ClipboardButton from 'react-clipboard.js';

storiesOf('Button')
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
