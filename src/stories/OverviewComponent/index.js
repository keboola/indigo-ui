import React from 'react';
import {storiesOf} from '@storybook/react';
import {OverlayTrigger, Popover} from 'react-bootstrap';
import Edit from "../../static/common/QueriesEdit";


storiesOf('Overview Component')
    .addWithInfo(
        'default',
        '',
        () => (
            <div className="kbc-overview-component-container">
                <div className="kbc-overview-component">
                    <div className="row kbc-header kbc-expiration">

                        <div className="alert alert-warning">
                            <h3>
                                <span>This project will expire in </span>
                                <span>6 days</span>
                            </h3>
                            <p>
                                <span>Please </span>
                                <a>contact support</a>
                                <span> for project plan upgrade.</span>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="kbc-overview-component">
                    <div className="row kbc-header kbc-limits">
                        <div className="alert alert-danger">
                            <h3>Project is over quota</h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a className="" href="/admin/projects/2376/settings-limits">
                                        <strong>
                                            <span>
                                                Keboola Connection</span>
                                            <span> - </span>
                                            <span>Orchestrations count</span>
                                        </strong>
                                        <span>
                                        </span>
                                        <span>
                                            (12 of 10)
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="kbc-overview-component">
                    <div className="row kbc-header kbc-expiration kbc-deprecation">
                        <div className="alert alert-warning">
                            <h3>Project contains deprecated components</h3>
                            <div className="row">
                                <div className="col-md-6">
                                    <h4>
                                        <span className="kbc-extractor-icon">

                                    </span>
                                        <span>Extractor</span>
                                        <span>s</span>
                                    </h4>
                                    <ul>
                                        <li><a className="" href="/admin/projects/2376/extractors/ex-gooddata">
                                            Gooddata (deprecated)
                                        </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="migration-row">
                    <div role="alert" className="alert alert-warning"><span>
                        <h3>This component has been deprecated</h3><div
                        className="migration-row-content">
                        <p><span>Migration takes place with the following consequences:</span></p>
                        <ul><li><strong>Only GoodData writer reports will be migrated:</strong>
                            <span>
                                Only reports of the GoodData project belonging to a GoodData writer configuration of
                                this project will be migrated. If there are reports from a different(non-writer)
                                GoodData project, then users have to do the migration manually.
                            </span>
                        </li><li>
                            <strong>Tables will be stored into different buckets:</strong>
                            <span> A new GoodData extractor will store extracted tables into new buckets.</span>
                        </li>
                            <li><strong>Orchestrations tasks update:</strong>
                                <span> All orchestration tasks of the old GoodData extractor configurations will be replaced with configurations of the new GoodData extractor.
                                </span></li><li><strong>Column naming conventions:</strong><span> The column names of the extracted table are based on the column names of the GoodData report. However, they can contain only alphanumeric characters and underscores. All other characters are replaced by underscores. For example, if there is a column in the report with the name "Month Revenue", then its corresponding table column name will be "Month_Revenue".</span></li></ul><p></p></div></span>
                        <button type="sumbit" className="btn btn-primary">
                            <span>Proceed to Migration</span>
                        </button>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )