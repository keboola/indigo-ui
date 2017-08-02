import React from 'react';
import {storiesOf} from '@storybook/react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';


storiesOf('Input')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <FormGroup>
                <FormControl type="text" placeholder="Normal text"/>
            </FormGroup>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'KBC - Configuration edit input',
        'seen here: https://connection.keboola.com/admin/projects/2376/extractors/esnerda.ex-ares/282215725',
        () => (
            <div className="row kbc-header">
                <span ><div placeholder="Describe configuration">
                    <div className="text-right">
                        <button className="btn btn-link">
                            <span className="kbc-icon-pencil"></span>
                            <span> </span>
                            <span >Describe configuration</span>
                        </button></div>
                    <div>
                        <span className="kbc-markdown">
                            <div><div className="kbc-readmore kbc-readmore-normal">
                                <div>
                                    <span >
                                        <p>eeeeee</p>
                                    </span>
                                </div>
                            </div></div>
                        </span>
                    </div>
                </div>
                </span>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - configuration edit input (transformation)',
        'seen here: https://connection.keboola.com/admin/projects/2376/transformations/bucket/301021305/transformation/301021375',
        () => (
            <div className="kbc-row">
                <p className="text-right">
                    <span>
                        <span
                            className="label kbc-label-rounded-small label-default kbc-cursor-pointer"><span>Phase: </span>
                            <span>1</span>
                            <span> </span>
                            <span className="kbc-icon-pencil"></span>
                        </span>
                        <noscript></noscript>
                    </span>
                    <span> </span>
                    <span className="label label-default">mysql</span>
                </p>
                <span >
                    <div placeholder="Describe transformation">
                <div className="text-right">
                    <button className="btn btn-link">
                    <span className="kbc-icon-pencil"></span>
                    <span> </span>
                        <span>Describe transformation</span>
                    </button>
                </div>
                        <div>
                <span className="kbc-markdown">
                    <div>
                        <div className="kbc-readmore kbc-readmore-normal">
                            <div>
                                <span>
                                    <p>fasdfasd</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </span>
            </div>
            </div>
            </span>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Notification input',
        'seen here: https://connection.keboola.com/admin/projects/2376/orchestrations/263622569/notifications',
        () => (
            <div className="col-xs-4 form-inline kbc-inline-edit">
                <input className="form-control" type="text" name="addPackage" placeholder="Enter email ..." value=""/>
                    <span className="kbc-inline-edit-buttons kbc-inline-edit-button">
                        <button disabled="" type="button" className="kbc-inline-edit-submit btn btn-success">
                            <span className="kbc-icon-plus"></span>
                        </button>
                    </span>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Input & validation',
        'Fancy demo here: https://react-bootstrap.github.io/components.html#forms',
        () => (
            <FormGroup controlId="formValidationSuccess1" validationState="success">
                <ControlLabel>Input with success</ControlLabel>
                <FormControl type="text"/>
                <HelpBlock>Help text with validation state.</HelpBlock>
            </FormGroup>
        ),
        {
            inline: true,
        }
    );
