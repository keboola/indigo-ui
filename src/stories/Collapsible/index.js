import React from "react";
import {storiesOf} from "@storybook/react";
import {Button, Accordion, Panel} from "react-bootstrap";
import Collapsible from "../../static/common/Collapsible";

// DEMO VALUES
const demoHeaderContent = (
    <h3>Panel title</h3>
);

const demoHeaderContent2 = (
    <h4>
        <span className="fa fa-fw fa-angle-right"></span>
        <span>Parameters &amp; Results</span>
    </h4>
);

const demoHeaderContent3 = (
    <h4>My FB 2 GDrive transformation</h4>
);

const demoHeaderContent4 = "in.c-keboola-ex-facebook-253350349"
const demoHeaderContent5 = "Keboola Connection"
const demoHeaderContent6 = "Aug 1,2017 - Aug 14,2017"
const demoHeaderContent7 = "0.000000430 credits"

const demoHeaderContentMapping = (
    <span>
           in.c-keboola-ex-facebook-253350349.accounts
        <span className="fa fa-chevron-right fa-fw"></span>
            <span className="fa fa-table fa-fw" title="Table"></span>
            accounts
    </span>
);

const demoHeaderActions = (
    <div>
        <button className="btn btn-link">
            <i className="fa kbc-icon-cup"/>
        </button>
        <button type="button" className="btn btn-link btn btn-default">
            <i className="fa fa-fw fa-play"/>
        </button>
        <button className="btn btn-link">
            <i className="fa fa-fw fa-chevron-right"/>
        </button>
    </div>
);

const demoHeaderStatus = (
    <span>
        <span className="label label-primary">
            2.05 kB
        </span>
        <span className="label label-default">
            snowflake
        </span>
        </span>
);


const demoContentCollapsible = (
    <Accordion>
        <Panel header="Collapsible Group Item #1" eventKey="1">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel header="Collapsible Group Item #2" eventKey="2">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
        <Panel header="Collapsible Group Item #3" eventKey="3">
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon
            officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3
            wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
            Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
            excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt
            you probably haven't heard of them accusamus labore sustainable VHS.
        </Panel>
    </Accordion>
);

const demoContent = "CNTNT";


storiesOf('Collapsible')
    .addWithInfo(
        '🆕 Collapsible united',
        'Doporuceny heading => h3',
        () => (
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent}
                         headerActions={demoHeaderActions}
                         headerStatus={demoHeaderStatus}
            >
            </Collapsible>
        ),
        {
            inline: true,
        }
    )
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
                    {demoContent}
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Collapsible @ Input Mapping',
        '',
        () => (
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContentMapping}
                         headerActions={demoHeaderActions}
                         headerStatus={demoHeaderStatus}
                         headerSize="sm"
            >
            </Collapsible>
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
                            {demoContent}
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
        '🆕 Collapsible @ Job Detail',
        'seen on https://connection.keboola.com/admin/projects/2376/jobs/300352618?q=',
        () => (
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent2}
            >
            </Collapsible>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
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
                        {demoContent}
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Collapsible @ Transformations',
        '',
        () => (
            <Collapsible content={demoContent}
                         headerActions={demoHeaderActions}
                         headerContent={demoHeaderContent3}
            >
            </Collapsible>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Collapsibe @ Gdrive component',
        'seen on https://connection.keboola.com/admin/projects/2376/writers/wr-google-drive/mysecondgdrivewriter' +
        ' &  on https://connection.keboola.com/admin/projects/2376/extractors/keboola.ex-google-drive/253384272',
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
                            {demoContent}
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
        '🆕 KBC - Collapsibe @ Gdrive component',
        '',
        () => (
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent4}
                         headerSize="sm"
            >
            </Collapsible>
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
                            {demoContent}
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
        '🆕 Collapsibe @ GD WR',
        'seen on https://connection.keboola.com/admin/projects/2376/writers/gooddata-writer/hdfshfsdh',
        () => (
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent4}
                         headerStatus={demoHeaderStatus}
                         headerSize="sm"
            >
            </Collapsible>
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
                            {demoContent}
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
        '🆕 Collapsible @ GA EX Profiles',
        'seen on https://connection.keboola.com/admin/projects/2376/extractors/keboola.ex-google-analytics-v4/282223264',
        () => (
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent5}
                         headerSize="sm"
            >
            </Collapsible>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'KBC - Project Power',
        'seen on https://connection.keboola.com/admin/projects/2376/extractors/keboola.ex-google-analytics-v4/282223264',
        () => (
            <div>
                <h3>
                    <span>Project Power from</span>
                    <span>Mar 20, 2017
                    </span>
                    <span> to </span>
                    <span>Aug 14, 2017
                    </span>
                </h3>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row panel-title">
                            <a aria-expanded="true" aria-selected="true">
                                <div className="col-sm-8">
                                    <strong>Aug 1,2017</strong>
                                    <span> - </span>
                                    <strong>
                                        Aug 14,2017
                                    </strong>
                                </div>
                                <div className="col-sm-4">
                                    <strong>
                                        <span>0.000000430 credits</span>
                                    </strong>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="panel-collapse" aria-hidden="true">
                        {demoContent}
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row panel-title"
                        ><a aria-expanded="false"
                            aria-selected="false"
                            className="collapsed"
                        >
                            <div className="col-sm-8">
                                <strong>Jul 1,
                                    2017</strong><span
                            > - </span><strong
                            >Jul 31,
                                2017</strong></div>
                            <div className="col-sm-4">
                                <strong><span
                                >0.004 credits</span></strong>
                            </div>
                        </a></div>
                    </div>
                    <div className="panel-collapse collapse" aria-hidden="true"
                    >
                        {demoContent}
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <div className="row panel-title"
                        ><a aria-expanded="false"
                            aria-selected="false"
                            className="collapsed"
                        >
                            <div className="col-sm-8">
                                <strong>Jun 1,
                                    2017</strong><span
                            > - </span><strong
                            >Jun 30,
                                2017</strong></div>
                            <div className="col-sm-4">
                                <strong><span
                                >0.000000527 credits</span></strong>
                            </div>
                        </a></div>
                    </div>
                    <div className="panel-collapse collapse" aria-hidden="true"
                    >
                        {demoContent}
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Project Power',
        'seen on https://connection.keboola.com/admin/projects/2376/extractors/keboola.ex-google-analytics-v4/282223264',
        () => (
            <div>
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent6}
                         headerStatus={demoHeaderContent7}
            >
            </Collapsible>
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent6}
                         headerStatus={demoHeaderContent7}
            >
            </Collapsible>
            <Collapsible content={demoContent}
                         headerContent={demoHeaderContent6}
                         headerStatus={demoHeaderContent7}
            >
            </Collapsible>
            </div>
        ),

        {
            inline: true,
        }
    );