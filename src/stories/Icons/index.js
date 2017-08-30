import React from 'react';
import {storiesOf} from '@storybook/react';
import {Image} from 'react-bootstrap';

storiesOf('Icons')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div>
                <i className="svg-Options svg-Options-dims"/>
                <i className="svg-Combined_Shape svg-Combined_Shape-dims"/>
                <i className="svg-Connection svg-Connection-dims"/>
                <i className="svg-Keboolas svg-Keboola-dims"/>
                <i className="svg-Rectangle_8_copy_2 svg-Rectangle_8_copy_2-dims"></i>
                <i className="svg-Rounded_Rectangle_3 svg-Rounded_Rectangle_3-dims"></i>
            </div>
        ),
        {
            inline: true,
        }
    )
;
