import React from 'react';
import {storiesOf} from '@storybook/react';
import { Alert } from 'react-bootstrap';


storiesOf('Notification')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div class="kbc-notifications">
                <div>
                    <div role="alert"
                         class="alert alert-info alert-dismissable">
                        <button type="button" class="close" aria-hidden="true" tabindex="-1"><span>×</span></button>
                        <span><a class="" href="/admin/projects/2376/jobs/296300230">Adform extractor job</a>
                            <span> has been scheduled</span></span>
                        <button type="button" class="close sr-only">Close
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
