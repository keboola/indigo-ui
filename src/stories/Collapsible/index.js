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
    )
    .addWithInfo(
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
.addWithInfo(
    'job detail',
    'seen on https://connection.keboola.com/admin/projects/2376/jobs/300352618?q=',
    () => (
        <div role="tablist" className="kbc-accordion kbc-panel-heading-with-table panel-group">
            <div className="panel panel-default">
                <div className="panel-heading"><span className="panel-title"><a role="tab" aria-expanded="false"
                                                                        aria-selected="false" className="collapsed"><span
                    className="table"><span className="tbody"><span className="tr"><span className="td"><h4><span
                    className="fa fa-fw fa-angle-right"></span><span>Parameters &amp;
                    Results</span></h4></span></span></span></span></a></span></div>
                <div role="tabpanel" className="panel-collapse collapse" aria-hidden="true">
                    <div className="panel-body">
                        <div>
                            <div className="col-md-6"><h4>Params </h4>
                                <div className="kb-tree">
                                    <ul>
                                        <li><span><strong>config</strong><span>: </span><span>254478952</span></span>
                                        </li>
                                        <li><span><strong>orchestration</strong><ul><li><span><strong>id</strong><span>: </span><span>254478952</span></span></li><li><span><strong>name</strong><span>: </span><span>booooou</span></span></li></ul></span>
                                        </li>
                                        <li>
                                            <span><strong>initializedBy</strong><span>: </span><span>scheduler</span></span>
                                        </li>
                                        <li><span><strong>initiator</strong><ul><li><span><strong>id</strong><span>: </span><span>70131</span></span></li><li><span><strong>description</strong><span>: </span><span>Orchestrator booooou</span></span></li><li><span><strong>userAgent</strong><span>: </span><span>orchestrator Scheduler</span></span></li></ul></span>
                                        </li>
                                        <li><span><strong>notificationsEmails</strong><ul></ul></span></li>
                                        <li><span><strong>tasks</strong><span>: </span><span>null</span></span></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6"><h4>Results </h4>
                                <div className="alert alert-danger"><span>ExceptionId orchestrator-057eb23f842959c97b96741b030965f3</span>
                                    <p>Orchestration job contains no tasks for execution</p></div>
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
    'Transformations  list',
    'seen on https://connection.keboola.com/admin/projects/2376/jobs/300352618?q=',
    () => (
        <div className="panel panel-default">
            <div className="panel-heading"><span className="panel-title"><a aria-expanded="true"
                                                                            aria-selected="true"><span
                className="table"><span className="tr"><span
                className="td col-xs-4"><h4>My FB 2 GDrive transformation</h4></span><span className="td col-xs-5"><small>bold-italic sfagsdg</small></span><span
                className="td col-xs-3 text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                className="fa kbc-icon-cup"></i></button><noscript></noscript></span><button type="button"
                                                                                             className="btn btn-link btn btn-default"><noscript></noscript><i
                className="fa fa-fw fa-play"></i><span> </span></button><button className="btn btn-link"><i
                className="fa fa-fw fa-chevron-right"></i></button></span></span></span></a></span></div>
            <div className="panel-collapse collapse in" aria-hidden="false">
                <div className="panel-body">
                    <div className="row">
                        <div className="table table-striped table-hover">
                            <div className="tbody"><a className="tr"
                                                      href="/admin/projects/2376/transformations/bucket/253380663/transformation/253383885"><span
                                className="td col-xs-3"><h4><span
                                className="label kbc-label-rounded-small label-default pull-left">1</span><span> </span><span>My transformationu</span></h4></span><span
                                className="td col-xs-1"><span className="label label-default">mysql</span></span><span
                                className="td col-xs-8"><small><em>No description</em></small></span></a><a
                                className="tr"
                                href="/admin/projects/2376/transformations/bucket/253380663/transformation/259376467"><span
                                className="td col-xs-3"><h4><span
                                className="label kbc-label-rounded-small label-default pull-left">1</span><span> </span><span>sdasbvs</span></h4></span><span
                                className="td col-xs-1"><span className="label label-default">mysql</span></span><span
                                className="td col-xs-8"><small><em>No description</em></small></span></a><a
                                className="tr"
                                href="/admin/projects/2376/transformations/bucket/253380663/transformation/259328984"><span
                                className="td col-xs-3"><h4><span
                                className="label kbc-label-rounded-small label-default pull-left">1</span><span> </span><span>sdfasdgasgas</span></h4></span><span
                                className="td col-xs-1"><span className="label label-default">mysql</span></span><span
                                className="td col-xs-8"><small><em>No description</em></small></span></a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ),
    {
        inline: true,
    }
)
.addWithInfo(
    'Gdrive Ex - sheet picker',
    'seen on https://connection.keboola.com/admin/projects/2376/extractors/keboola.ex-google-drive/253384272',
    () => (
        <div className="kbc-accordion kbc-panel-heading-with-table kbc-panel-heading-with-table">
            <div className="panel panel-default">
                <div className="panel-heading"><span className="panel-title"><a aria-expanded="true"
                                                                                aria-selected="true"><span
                    className="table"><span className="tbody"><span className="tr"><span className="td"><span>Data analyst skill sets</span><span> </span></span></span></span></span></a></span>
                </div>
                <div className="panel-collapse collapse in" aria-hidden="false">
                    <div className="panel-body">
                        <div className="row">
                            <div className="list-group"
                                 data-keboolaid=".4e.1.0.0.1.0.0.0.$1.1.1.0.1.$0.$=10.$1za6uDCfxrAFUsO_l7dzVVF3yhparI5HMkkK5AURhRbA">
                                <button type="button" className="list-group-item"
                                        data-keboolaid=".4e.1.0.0.1.0.0.0.$1.1.1.0.1.$0.$=10.$1za6uDCfxrAFUsO_l7dzVVF3yhparI5HMkkK5AURhRbA.$0">
                                    Sheet1
                                </button>
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
)

.addWithInfo(
    'Good data writer',
    'seen on https://connection.keboola.com/admin/projects/2376/writers/gooddata-writer/hdfshfsdh',
    () => (
        <div className="kbc-accordion kbc-panel-heading-with-table kbc-panel-heading-with-table">
            <div className="panel panel-default">
                <div className="panel-heading"><span className="panel-title"><a aria-expanded="true"
                                                                                aria-selected="true"><span
                    className="table"><span className="tbody"><span className="tr"><span className="td">in.c-keboola-ex-facebook-253350349</span><span
                    className="td text-right"><span
                    className="label label-primary">1 / 1</span></span></span></span></span></a></span></div>
                <div className="panel-collapse collapse in" aria-hidden="false">
                    <div className="panel-body">
                        <div className="row">
                            <div className="table table-striped table-hover">
                                <div className="thead">
                                    <div className="tr"><span className="th"><strong>Table name</strong></span><span
                                        className="th"><strong>GoodData title</strong></span><span
                                        className="th"></span></div>
                                </div>
                                <div className="tbody"><a className="tr"
                                                                                         href="/admin/projects/2376/writers/gooddata-writer/hdfshfsdh/table/in.c-keboola-ex-facebook-253350349.feed"><span
                                    className="td"><span><span className="kbc-sapi-table-link">feed</span><span></span></span></span><span
                                    className="td">in.c-keboola-ex-facebook-253350349.feed</span><span
                                    className="td text-right"><button className="btn btn-link"><i
                                    className="fa fa-fw fa-check"></i></button><span><button className="btn btn-link"><i
                                    className="kbc-icon-cup"></i></button><noscript></noscript></span><span><button
                                    className="btn btn-link"><span className="fa fa-upload fa-fw"></span></button><noscript></noscript></span></span></a>
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
)

.addWithInfo(
    'Profiles picker',
    'seen on https://connection.keboola.com/admin/projects/2376/extractors/keboola.ex-google-analytics-v4/282223264',
    () => (
        <div className="kbc-accordion kbc-panel-heading-with-table kbc-panel-heading-with-table'">
            <div className="profile-panel panel panel-default"
                 data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection">
                <div className="panel-heading"
                     data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.0"><span
                    className="panel-title"
                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.0.0"><a
                    aria-expanded="true" aria-selected="true"
                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.0.0.0">Keboola Connection</a></span>
                </div>
                <div className="panel-collapse collapse in" aria-hidden="false"
                     data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1">
                    <div className="panel-body"
                         data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0">
                        <div className="panel panel-default"
                             data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC">
                            <div className="panel-heading"
                                 data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.0">
                                <span className="panel-title"
                                      data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.0.0"><a
                                    aria-expanded="true" aria-selected="true"
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.0.0.0"><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.0.0.0.0">KBC</span><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.0.0.0.1"> (</span><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.0.0.0.2">UA-48890312-1</span><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.0.0.0.3">)</span></a></span>
                            </div>
                            <div className="panel-collapse collapse in" aria-hidden="false"
                                 data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1">
                                <div className="panel-body"
                                     data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0">
                                    <div className="row"
                                         data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10">
                                        <div className="list-group"
                                             data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10.0">
                                            <button type="button" className="list-group-item"
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10.0.0">
                                                <div className="text-center"
                                                     data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10.0.0.0">
                                                    <span
                                                        data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10.0.0.0.0">connection.keboola.com</span><span
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10.0.0.0.1"> (</span><span
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10.0.0.0.2">83296310</span><span
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$KBC=2$KBC.1.$0.$=10.0.0.0.3">)</span>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel panel-default"
                             data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel">
                            <div className="panel-heading"
                                 data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.0">
                                <span className="panel-title"
                                      data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.0.0"><a
                                    aria-expanded="false" aria-selected="false"
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.0.0.0"
                                    className="collapsed"><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.0.0.0.0">martin-connection-devel</span><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.0.0.0.1"> (</span><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.0.0.0.2">UA-48890312-2</span><span
                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.0.0.0.3">)</span></a></span>
                            </div>
                            <div className="panel-collapse collapse" aria-hidden="true"
                                 data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1">
                                <div className="panel-body"
                                     data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0">
                                    <div className="row"
                                         data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10">
                                        <div className="list-group"
                                             data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10.0">
                                            <button type="button" className="list-group-item"
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10.0.0">
                                                <div className="text-center"
                                                     data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10.0.0.0">
                                                    <span
                                                        data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10.0.0.0.0">Všechny údaje o webu</span><span
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10.0.0.0.1"> (</span><span
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10.0.0.0.2">117241998</span><span
                                                    data-keboolaid=".7.1.0.0.1.0.0.0.0.0.2.2.$Keboola Connection:$Keboola Connection.1.$0.$=1$martin-connection-devel=2$martin-connection-devel.1.$0.$=10.0.0.0.3">)</span>
                                                </div>
                                            </button>
                                        </div>
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
)

;
