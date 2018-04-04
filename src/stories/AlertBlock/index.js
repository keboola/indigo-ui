import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {fromJS} from 'immutable';

import AlertBlock from '../../indigo/components/Tree';

storiesOf('AlertBlock', module)
    .add(
        'Tree - simple structure',
        withInfo({
            text: `
        Render Immutable data structure as unordered list.
        `,
            inline: true,
        })(() => {
            return (
                <div className="kbc-overview-component-container">
                    <div className="kbc-overview-component">
                        <div className="row kbc-header kbc-limits">
                            <div className="alert alert-block alert-danger">
                                <h3>Project is over quota</h3>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="" href="#/settings-limits">
                                            <strong><span>Keboola Connection</span><span> - </span><span>Orchestrations count</span></strong><span> </span><span>(39 of 10)</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="kbc-overview-component">
                        <div className="row kbc-header kbc-expiration kbc-deprecation">
                            <div className="alert alert-block alert-warning"><h3>Project contains deprecated components</h3>
                                <div className="row">
                                    <div className="col-md-6">
                                        <h4>
                                            <span className="kbc-application-icon"></span>
                                            <span>Application</span><span>s</span>
                                    </h4>
                                        <ul>
                                            <li>
                                                <a className="" href="#/applications/keboola.custom-science-php">
                                                    Custom science PHP
                                                </a>
                                            </li>
                                            <li>
                                                <a className="" href="#/applications/dca-custom-science-python2">Custom
                                                science Python (v2.x)
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>
                                            <span className="kbc-extractor-icon"></span>
                                            <span>Extractor</span><span>s</span>
                                        </h4>
                                        <ul>
                                            <li><a className="" href="#/extractors/ex-gooddata">
                                                Gooddata (deprecated)
                                            </a></li>
                                            <li><a className="" href="#/extractors/keboola.ex-pigeon">
                                                Pigeon</a></li>
                                            <li><a className="" href="#/extractors/pigeon-importer">Pigeon Importer
                                                (Deprecated)</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="kbc-overview-component">
                        <div className="row kbc-header kbc-expiration kbc-deprecation">
                            <div className="alert alert-block alert-warning"><h3>Project contains deprecated MySQL
                                transformations</h3>
                                <div><span>Learn more about the deprecation </span><a
                                    href="http://status.keboola.com/deprecating-mysql-storage-and-transformations"
                                    target="_blank">timeline and reasons</a><span>.</span></div>
                                <div className="row">
                                    <div className="col-md-6"><h4><span
                                        className="kbc-transformation-icon"></span><span>ew</span></h4>
                                        <ul>
                                            <li><a className=""
                                                   href="#/transformations/bucket/372801573/transformation/372801696">rwe</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6"><h4><span
                                        className="kbc-transformation-icon"></span><span>fasdfas</span></h4>
                                        <ul>
                                            <li><a className=""
                                                   href="#/transformations/bucket/337737451/transformation/337737476">sadfas</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-6"><h4><span
                                        className="kbc-transformation-icon"></span><span>Part 1</span></h4>
                                        <ul>
                                            <li><a className=""
                                                   href="#/transformations/bucket/343675609/transformation/343676050">Main</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            );
        })
    );
