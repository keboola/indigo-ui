import React from 'react';
import {storiesOf} from '@storybook/react';
import { Alert } from 'react-bootstrap';


storiesOf('Notification')
    .addWithInfo(
        'KBC - Notification @ App',
        'Desc',
        () => (
            <div className="kbc-notifications">
                <div>
                    <div role="alert"
                         className="alert alert-info alert-dismissable">
                        <button type="button" className="close" aria-hidden="true" tabindex="-1"><span>×</span></button>
                        <span><a className="" href="/admin/projects/2376/jobs/296300230">Adform extractor job</a>
                            <span> has been scheduled</span></span>
                        <button type="button" className="close sr-only">Close
                            alert
                        </button>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
