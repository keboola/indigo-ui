import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';

storiesOf('DetailRightPanel')
    .addWithInfo(
        'default',
        'Desc',
        () => (
            <div className="kbc-main-sidebar" >
                <div >
                    <div >
                        <div ><span
                        >Created by </span><strong
                        >jan@janmichek.cz</strong></div>
                        <div >
                            <small ><span >on </span><strong
                            >2017-04-04 15:21:31</strong></small>
                        </div>
                    </div>
                    <div >
                        <small ><span >Last update </span><span
                        >4 months ago</span><span
                        > by </span><span
                        >jan@janmichek.cz</span><br/><span ># 2</span><span
                        > </span><span >Update name</span>
                        </small>
                    </div>
                </div>
                <ul className="nav nav-stacked" >
                    <li className="" ><a className="" >
                        <noscript ></noscript>
                        <i className="fa fa-fw fa-play" ></i><span
                    > </span><span
                    >Run</span></a></li>
                    <li ><a ><span
                        className="kbc-icon-cup fa fa-fw" ></span><span
                    > Move to Trash</span></a></li>
                </ul>
                <div ><h4 ><span
                >Last runs </span></h4>
                    <div className="kbc-sidebar-jobs" ><a className="list-group-item"
                                                          href="/admin/projects/2376/jobs/263625920"
                    ><span
                        className="table" ><span className="tr"
                    ><span
                        className="td kbc-td-status" ><img
                        src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/></span><span className="td"
                    ><div
                    ><strong
                    >263625920</strong></div><div
                    >Orchestrator Hrozna orchestrace</div><div
                    ><small className="pull-left"
                    ><span
                    ><i className="fa fa-clock-o"
                    ></i><span
                    > </span><span
                    >9 sec</span></span></small><small
                        className="pull-right" ><span
                        title="2017-04-27 14:26:51" ><i
                        className="fa fa-calendar" ></i><span
                    > </span><span
                        title="2017-04-27 14:26:51" >3 months ago</span></span></small></div></span></span></span></a><a
                        className="list-group-item" href="/admin/projects/2376/jobs/263625915"
                    ><span className="table"
                    ><span
                        className="tr" ><span className="td kbc-td-status"
                    ><img
                        src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/></span><span className="td"
                    ><div
                    ><strong
                    >263625915</strong></div><div
                    >Orchestrator Hrozna orchestrace</div><div
                    ><small className="pull-left"
                    ><span
                    ><i className="fa fa-clock-o"
                    ></i><span
                    > </span><span
                    >12 sec</span></span></small><small
                        className="pull-right" ><span
                        title="2017-04-27 14:25:53" ><i
                        className="fa fa-calendar" ></i><span
                    > </span><span
                        title="2017-04-27 14:25:53" >3 months ago</span></span></small></div></span></span></span></a><a
                        className="list-group-item" href="/admin/projects/2376/jobs/263622779"
                    ><span className="table"
                    ><span
                        className="tr" ><span className="td kbc-td-status"
                    ><img src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/></span><span className="td"
                    ><div
                    ><strong
                    >263622779</strong></div><div
                    >Orchestrator Hrozna orchestrace</div><div
                    ><small className="pull-left"
                    ><span
                    ><i className="fa fa-clock-o"
                    /><span
                    > </span><span
                    >7 sec</span></span></small><small
                        className="pull-right" ><span
                        title="2017-04-27 14:12:14" ><i
                        className="fa fa-calendar" ></i><span
                    > </span><span
                        title="2017-04-27 14:12:14" >3 months ago</span></span></small></div></span></span></span></a>
                        <div className="jobs-link" ><a className=""
                                                       href="/admin/projects/2376/jobs?q=%2Bparams.component%3Aesnerda.ex-ares%20%2Bparams.config%3A253425718"
                        >Show
                            all jobs</a></div>
                    </div>
                </div>
                <div >
                    <h4 ><span >Updates</span><span
                        className="pull-right"><span
                    > </span><small
                    ><em className="fa fa-fw fa-files-o"
                    ></em><span
                    > Compare Latest</span></small><noscript
                    ></noscript></span></h4>
                    <div className="kbc-sidebar-versions" ><a className="list-group-item"
                                                              href="/admin/projects/2376/extractors/esnerda.ex-ares/253425718/versions"
                    ><span
                        className="table" ><span className="tr"
                    ><span
                        className="td versions-status" ><span
                        className="fa fa-check-circle fa-fw kbc-version-icon last"
                    ></span></span><span className="td"
                    ><div
                    >Update name</div><div
                    >jan@janmichek.cz</div><div
                    ><small className="text-muted pull-left"
                    ><span
                    >#</span><span
                    >2</span></small><small
                        className="text-muted pull-right" ><span
                        title="2017-04-11 18:07:44" ><i
                        className="fa fa-fw fa-calendar" ></i><span
                    >4 months ago</span></span></small></div></span></span></span></a><a
                        className="list-group-item"
                        href="/admin/projects/2376/extractors/esnerda.ex-ares/253425718/versions"
                    ><span className="table"
                    ><span
                        className="tr" ><span className="td versions-status"
                    ><span
                        className="fa fa-circle-o fa-fw kbc-version-icon"
                    ></span></span><span className="td"
                    ><div
                    ><small className="text-muted"
                    >No description</small></div><div
                    >jan@janmichek.cz</div><div
                    ><small className="text-muted pull-left"
                    ><span
                    >#</span><span
                    >1</span></small><small
                        className="text-muted pull-right" ><span
                        title="2017-04-04 15:21:31" ><i
                        className="fa fa-fw fa-calendar" ></i><span
                    >4 months ago</span></span></small></div></span></span></span></a>
                        <div className="versions-link" ><a className=""
                                                           href="/admin/projects/2376/extractors/esnerda.ex-ares/253425718/versions"
                        >Show
                            all versions</a></div>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
