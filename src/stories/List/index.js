import React from 'react';
import {storiesOf} from '@storybook/react';
import { Alert } from 'react-bootstrap';


storiesOf('List')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div >
                <div class="kbc-header">
                    <div class="kbc-title"><h2
                    ><span class="kb-sapi-component-icon"
                    ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/dca-alook-analytics/32/1.png" width="32"
                        height="32"/></span><a class=""
                                               href="/admin/projects/2390/applications/dca-alook-analytics"
                    >aLook
                        Analytics</a></h2></div>
                </div>
                <div class="table table-hover" data-keboolaid=".0.3.0.1.0.1:$dca-alook-analytics.1"><span class="tbody"
                ><a
                    class="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301665"
                ><span class="td"
                ><strong
                    class="kbc-config-name"
                >test</strong><div
                ><small
                >test</small></div></span><span
                    class="td text-right kbc-component-buttons"
                ><span
                    class="kbc-component-author"
                ><span
                >Created by </span><strong
                >jan@keboola.com</strong></span><span
                ><button
                    class="btn btn-link"
                ><i
                    class="fa kbc-icon-cup"
                ></i></button><noscript
                ></noscript></span><button
                    type="button" class="btn btn-link btn btn-default"
                ><noscript
                ></noscript><i
                    class="fa fa-fw fa-play"
                ></i><span
                > </span></button></span></a><a
                    class="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301686"
                ><span class="td"
                ><strong
                    class="kbc-config-name"
                >test2</strong><div
                ><small
                >test2</small></div></span><span
                    class="td text-right kbc-component-buttons"
                ><span
                    class="kbc-component-author"
                ><span
                >Created by </span><strong
                >jan@keboola.com</strong></span><span
                ><button
                    class="btn btn-link"
                ><i
                    class="fa kbc-icon-cup"
                ></i></button><noscript
                ></noscript></span><button
                    type="button" class="btn btn-link btn btn-default"
                ><noscript
                ></noscript><i
                    class="fa fa-fw fa-play"
                ></i><span
                > </span></button></span></a></span>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
