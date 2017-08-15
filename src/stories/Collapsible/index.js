import React from "react";
import {storiesOf} from "@storybook/react";
import {Button, Accordion, Panel} from "react-bootstrap";


storiesOf('Collapsible')

    .addWithInfo(
        'KBC - Collapsible @ Input Mapping',
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
                    CONTENT

                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Collapsible @ Job Detail',
        'seen on https://connection.keboola.com/admin/projects/2376/jobs/300352618?q=',
        () => (
            <div role="tablist" className="kbc-accordion kbc-panel-heading-with-table panel-group">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <span className="panel-title">
                        <a role="tab" aria-expanded="true" aria-selected="true">
                            <span className="table">
                                <span className="tbody">
                                <span className="tr">
                                    <span className="td">
                                        <h4>
                                <span className="fa fa-fw fa-angle-right"></span>
                                <span>Parameters &amp; Results</span>
                                        </h4>
                                    </span>
                                </span>
                                </span>
                            </span>
                        </a>
                    </span>
                    </div>
                    <div role="tabpanel" className="panel-collapse" aria-hidden="false">
                        <div className="panel-body">
                            CNTNT
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
    'KBC - Collapsible @ Transformations',
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
                    CONTNT
                </div>
            </div>
        </div>
    ),
    {
        inline: true,
    }
)
    .addWithInfo(
        'KBC - Collapsible @ Gdrive EX',
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
                            CONTENT
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
        'KBC - Collapsibe @ Gdrive WR',
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
                            Content
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
        'KBC - Collapsibe @ GD WR',
        'seen on https://connection.keboola.com/admin/projects/2376/writers/gooddata-writer/hdfshfsdh',
        () => (
            <div className="kbc-accordion kbc-panel-heading-with-table kbc-panel-heading-with-table">
                <div className="panel panel-default">
                    <div className="panel-heading">
                    <span className="panel-title">
                        <a aria-expanded="true" aria-selected="true">
                            <span className="table">
                                <span className="tbody">
                                    <span className="tr">
                                        <span className="td">
                                            in.c-keboola-ex-facebook-253350349
                                        </span>
                                        <span className="td text-right">
                                            <span className="label label-primary">
                                                1 / 1
                                            </span>
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </a>
                    </span>
                    </div>
                    <div className="panel-collapse collapse in" aria-hidden="false">
                        <div className="panel-body">
                            CNTNT
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
        'KBC - Collapsible @ GA EX Profiles',
        'seen on https://connection.keboola.com/admin/projects/2376/extractors/keboola.ex-google-analytics-v4/282223264',
        () => (
            <div className="kbc-accordion kbc-panel-heading-with-table kbc-panel-heading-with-table'">
                <div className="profile-panel panel panel-default">
                    <div className="panel-heading">
                    <span className="panel-title">
                        <a aria-expanded="true" aria-selected="true">
                            Keboola Connection
                        </a>
                    </span>
                    </div>
                    <div className="panel-collapse collapse in" aria-hidden="false">
                        <div className="panel-body">
                            CNTNT
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
