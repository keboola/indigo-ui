import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';

storiesOf('Breadcrumbs')
    .addWithInfo(
        'KBC - Breadcrumbs @ header',
        '',
        () => (
            <div className="kbc-title"><span ><span className="kb-sapi-component-icon"><img
                src="https://d1ycqiwapkz1gh.cloudfront.net/icons/esnerda.ex-ares/32/1.png" width="32" height="32" />
            </span><span > </span></span>
                <a className="" href="/admin/projects/2376/extractors">Extractors</a>
                <span className="kbc-icon-arrow-right"></span>
                <a className="" href="/admin/projects/2376/extractors/esnerda.ex-ares">ARES</a><span
                className="kbc-icon-arrow-right"></span>
                <span ><span ><span placeholder="Name the component ..."
                                                                        className="kbc-inline-edit-link"><span >My Ares test extractor</span><span > </span><span
                className="kbc-icon-pencil"></span></span></span></span><span > </span><span > </span></div>
        ),
        {
            inline: true,
        }
    )
;
