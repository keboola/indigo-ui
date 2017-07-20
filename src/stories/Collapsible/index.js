import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';

storiesOf('Collapsible')
    .addWithInfo(
        'google writer table',
        'seen on https://connection.keboola.com/admin/projects/2376/writers/wr-google-drive/mysecondgdrivewriter',
        () => (

            <div className="kbc-accordion kbc-panel-heading-with-table kbc-panel-heading-with-table">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <span className="panel-title">
                        <a aria-expanded="false" aria-selected="false" className="collapsed">
                            <span className="table">
                                <span className="tbody">
                                    <span className="tr">
                                        <span className="td">
                                            in.c-keboola-ex-facebook-253350349
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                        </span>
                    </div>
                    <div className="panel-collapse collapse in" aria-hidden="false">
                        <div className="panel-body">
                            <div className="row">
                                <div className="table table-striped table-hover">
                                    <div className="thead">
                                        <div className="tr">
                                            <span className="th"><strong>Table name</strong></span>
                                            <span className="th"></span>
                                            <span className="th"><strong>Title</strong></span>
                                            <span className="th"><strong>Operation</strong></span><span
                                            className="th"><strong>Type</strong></span><span
                                            className="th"><strong>Folder</strong></span>
                                        </div>
                                    </div>
                                    <div className="tbody">
                                        <div className="tr">
                                <span className="td">
                                    <span>
                                        <span className="kbc-sapi-table-link">accounts</span>
                                        <span></span>
                                    </span></span>
                                            <span className="td"><i className="kbc-icon-arrow-right"></i></span>
                                <span className="td"><span>
                                    <span>account table</span>
                                    <div>
                                        <button className="btn btn-link btn-sm">
                                            <small>Link To Google Drive</small>
                                        </button>
                                    </div>
                                </span>
                                </span>
                                            <span className="td"><span>create</span></span>
                                            <span className="td"><span>sheet</span></span>
                                            <span className="td">KEBOOLA</span>
                                <span className="td text-right kbc-no-wrap"><button className="btn btn-link">
                                    <i className="fa fa-fw kbc-icon-pencil"></i></button>
                                    <span>
                                        <button className="btn btn-link">
                                        <i className="kbc-icon-cup"></i>
                                        </button></span>
                                    <button type="button" className="btn btn-link btn btn-default">
                                        <i className="fa fa-fw fa fa-play fa-fw"></i><span> </span>
                                    </button>
                                </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
    'input mapping',
    'seen on https://connection.keboola.com/admin/projects/2376/transformations/bucket/253380663/transformation/259376467',
    () => (

        <div className="kbc-panel-heading-with-table panel panel-default">
            <div className="panel-heading">
                <div className="panel-title">
                    <a aria-expanded="true" aria-selected="true">
                <span className="table">
                    <span className="tbody">
                        <span className="tr">
                            <span className="td col-xs-3">
                                <span className="label label-primary">
                                    <span>2.05 kB</span>
                                </span><span> </span>
                                <span className="label label-default">snowflake</span></span>
                            <span className="td col-xs-4">in.c-keboola-ex-facebook-253350349.accounts</span>
                            <span className="td col-xs-1">
                                <span className="fa fa-chevron-right fa-fw"></span>
                            </span>
                            <span className="td col-xs-3">
                                <span className="fa fa-table fa-fw" title="Table"></span>
                                <span> </span>
                                <span>accounts</span></span>
                            <span className="td col-xs-1 text-right kbc-no-wrap">
                                <span>
                                <button className="btn btn-link"><i className="fa kbc-icon-cup"></i></button>
                            </span>
                                <span>
                                    <button type="button" className="btn btn-link">
                                        <span className="fa fa-pencil"></span>
                                    </button>
                                </span>
                            </span>
                        </span>
                    </span>
                </span>
                    </a>
                </div>
            </div>
            <div className="panel-collapse collapse in" aria-hidden="false">
                <ul className="clearfix list-group">
                    <li className="list-group-item">
                        <strong className="col-md-4">Source table</strong>
                <span className="col-md-6">
                    <span>
                        <span className="kbc-sapi-table-link">in.c-keboola-ex-facebook-253350349.accounts</span>
                        <span></span>
                    </span>
                </span>
                    </li>
                    <li className="list-group-item">
                        <strong className="col-md-4">Optional</strong>
                <span className="col-md-6">
                    <i className="fa fa-fw fa-times"></i>
                </span>
                    </li>
                    <li className="list-group-item">
                        <strong className="col-md-4">Columns</strong>
                        <span className="col-md-6">Use all columns</span>
                    </li>
                    <li className="list-group-item">
                        <strong className="col-md-4">Filters</strong>
                <span className="col-md-6"><span>N/A</span>
                </span>
                    </li>
                    <li className="list-group-item">
                        <strong className="col-md-4">Indexes</strong>
                        <span className="col-md-6">N/A</span>
                    </li>
                    <li className="list-group-item">
                        <div className="clearfix">
                            <strong className="col-md-4">Data types</strong>
                            <span className="col-md-6">No data types set</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    ),
    {
        inline: true,
    }
)

;
