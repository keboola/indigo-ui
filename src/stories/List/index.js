import React from 'react';
import {storiesOf} from '@storybook/react';
import {Alert} from 'react-bootstrap';


storiesOf('List')
    .addWithInfo(
        'simple',
        'Desc',
        () => (
            <ul>
                <li>aLook Analytics</li>
                <li>Created by</li>
                <li>className</li>
            </ul>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
    'with icon',
    'Desc',
    () => (
        <ul>
            <li>aLook Analytics</li>
            <li>Created by</li>
            <li>className</li>
        </ul>
    ),
    {
        inline: true,
    }
    )
    .addWithInfo(
        'big list with actions',
        'Desc',
        () => (
            <div >
                <div className="kbc-header">
                    <div className="kbc-title">
                        <h2 ><span className="kb-sapi-component-icon">
                            <img src="https://d1ycqiwapkz1gh.cloudfront.net/icons/dca-alook-analytics/32/1.png"
                                 width="32" height="32"/></span>
                            <a className="" href="/admin/projects/2390/applications/dca-alook-analytics">
                                aLook Analytics
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="table table-hover">
                    <span className="tbody">
                        <a className="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301665">
                            <span className="td"><strong className="kbc-config-name">test</strong>
                                <div>
                                <small>test</small>
                                </div>
                            </span>
                        <span className="td text-right kbc-component-buttons">
                            <span className="kbc-component-author">
                                <span>Created by </span>
                                <strong>jan@keboola.com</strong>
                            </span>
                            <span>
                                <button className="btn btn-link">
                                    <i className="fa kbc-icon-cup"></i>
                                </button>
                            </span>
                            <button type="button" className="btn btn-link btn btn-default">
                            <i className="fa fa-fw fa-play"></i>
                            <span> 
                        </span>
                        </button>
                        </span>
                        </a>
                        <a className="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301686">
                            <span className="td">
                                <strong className="kbc-config-name">test2</strong>
                                <div>
                                    <small>test2</small>
                                </div>
                            </span>
                                <span className="td text-right kbc-component-buttons">
                                    <span className="kbc-component-author">
                                        <span>Created by </span>
                                        <strong>jan@keboola.com</strong>
                                    </span>
                                    <span>
                                        <button className="btn btn-link">
                                            <i className="fa kbc-icon-cup"></i>
                                        </button>
                                    </span>
                                    <button type="button" className="btn btn-link btn btn-default">
                                        <i className="fa fa-fw fa-play"></i>
                                    </button>
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
