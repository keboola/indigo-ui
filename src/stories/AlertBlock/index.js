import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import AlertBlock from '../../indigo/components/AlertBlock';

storiesOf('AlertBlock', module)
    .add(
        'Deptrecated components',
        withInfo({
            text: `
        Warnings & Errors
        `,
            inline: true,
        })(() => {
            return (
                <div className="kbc-overview-component-container">
                    <AlertBlock
                        style="warning"
                        title="Project contains deprecated components">
                        <div className="row">
                            <div className="col-md-6">
                                <h4>
                                    <span className="kbc-application-icon"></span>
                                    <span>Application</span><span>s</span>
                                </h4>
                                <ul>
                                    <li>
                                        <a>
                                            Custom science PHP
                                        </a>
                                    </li>
                                    <li>
                                        <a>Custom science Python (v2.x)
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
                                    <li>
                                        <a>
                                            Gooddata (deprecated)
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Pigeon
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            Pigeon Importer (Deprecated)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </AlertBlock>

                    <AlertBlock
                        style="danger"
                        title="Project is over quota">
                        <ul className="list-unstyled">
                            <li>
                                <a>
                                    <strong>Keboola Connection - Orchestrations count</strong>
                                    (39 of 10)
                                </a>
                            </li>
                        </ul>
                    </AlertBlock>

                    <AlertBlock
                        style="warning"
                        title="Project contains deprecated MySQL transformations">
                        <div>
                            <div>Learn more about the deprecation <a>timeline and reasons</a>.</div>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4><span className="kbc-transformation-icon"></span><span>ew</span></h4>
                                    <ul>
                                        <li>
                                            <a>rwe</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6"><h4><span className="kbc-transformation-icon"></span>fasdfas
                                </h4>
                                    <ul>
                                        <li>
                                            <a>sadfas</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6"><h4><span
                                    className="kbc-transformation-icon"></span>Part 1</h4>
                                    <ul>
                                        <li>
                                            <a>Main</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </AlertBlock>
                </div>
            );
        })
    );
