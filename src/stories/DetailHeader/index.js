import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';


storiesOf('Detail Header', module)
    .add(
        'Basic init',
        withInfo({
            text: `Serves to layout Detail information which fits to column formation`,
            inline: true,
        })(() => {
            return (
                <div className="detail-header">
                    <div className="image-box">
                        <div className="wrapper">
                            <img className="app-icon" src="/images/default-app-icon.png"
                                 alt="Add Filename Column icon"/>
                        </div>
                    </div>
                    <div className="flags-box flags-box-view-mode font-size-smaller">
                        <div className="wrapper">
                            <div>
                                <ul className="list-unstyled">
                                    <li>ID - keboola.processor-add-filename-column</li>
                                    <li>Component type - processor</li>
                                    <li>Support is provided by Keboola</li>
                                    <li className="overflow-ellipsis">License: <a
                                        href="https://github.com/keboola/processor-add-filename-column/blob/master/LICENSE">https://github.com/keboola/processor-add-filename-column/blob/master/LICENSE</a>
                                    </li>
                                    <li className="overflow-ellipsis">Documentation: <a
                                        href="https://github.com/keboola/processor-add-filename-column/blob/master/README.md#usage">https://github.com/keboola/processor-add-filename-column/blob/master/README.md#usage</a>
                                    </li>
                                    <li className="overflow-ellipsis">Source code: <a
                                        href="https://github.com/keboola/processor-add-filename-column">https://github.com/keboola/processor-add-filename-column</a>
                                    </li>
                                </ul>
                                <ul className="list-unstyled">
                                    <li>Component status: Public</li>
                                    <li>Encryption: Disabled</li>
                                    <li>Default bucket: Disabled</li>
                                    <li>Network: none</li>
                                    <li>Forwards token: No</li>
                                    <li>Forwards token details: No</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="vendor-box vendor-box-view-mode font-size-smaller">
                        <div className="wrapper">
                            <div><p>Developed by</p>
                                <ul className="list-unstyled">
                                    <li><strong>Keboola s.r.o.</strong></li>
                                    <li>
                                        <div>
                                            <span>Křižíkova 488/115</span><br/>
                                            <span>186 00 Prague 8</span><br/>
                                            <span>Czech Republic</span>
                                        </div>
                                    </li>
                                    <li><a href="mailto:support@keboola.com">support@keboola.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    );
