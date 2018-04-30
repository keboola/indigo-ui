import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Image} from 'react-bootstrap';


storiesOf('Detail Header', module)
    .add(
        'Basic init',
        withInfo({
            text: `Serves to layout Detail information which fits to column formation`,
            inline: true,
        })(() => {
            return (
                <div className="detail-block">
                    <div className="detail-column image-box">
                        <Image className="center-block"
                               src="https://avatars2.githubusercontent.com/u/1424387?s=200&v=4"
                               responsive/>
                    </div>
                    <div className="detail-column detail-column-middle">
                        <h3> ID - keboola.processor-add-filename-column</h3>
                        <ul className="list-unstyled">
                            <li>Component type - processor</li>
                            <li>Support is provided by Keboola</li>
                            <li>License: <a
                                href="#">https://github.com/keboola/processor-add-filename-column/blob/master/LICENSE</a>
                            </li>
                            <li>Documentation: <a
                                href="#">https://github.com/keboola/processor-add-filename-column/blob/master/README.md#usage</a>
                            </li>
                            <li>Source code: <a
                                href="#">https://github.com/keboola/processor-add-filename-column</a>
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
                    <div className="detail-column">
                        <p>Developed by</p>
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
            )
        })
    );
