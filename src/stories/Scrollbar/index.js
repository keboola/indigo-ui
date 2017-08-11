import React from 'react';
import { storiesOf } from '@storybook/react';
import { Scrollbars } from 'react-custom-scrollbars';

const myScrollbar = {
    width: 400,
    height: 400,
};

storiesOf('Scrollbar')
    .addWithInfo(
        '🆕 Scrollbar',
        'http://malte-wessel.github.io/react-custom-scrollbars/',
        () => (
            <Scrollbars style={{ width: 500, height: 300 }}>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
                <p>Some great content...</p>
            </Scrollbars>
        ),
        {
            inline: true,
        }
    )
;
