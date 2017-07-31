import React from 'react';
import {storiesOf} from '@storybook/react';
import { ListGroup, ListGroupItem, Label } from 'react-bootstrap';


storiesOf('List')
    .addWithInfo(
        'simple',
        'Desc',
        () => (
            <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
            </ListGroup>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
    'with status',
    'Desc',
    () => (
        <ListGroup>
            <ListGroupItem><Label bsStyle="default">1</Label>Item 1</ListGroupItem>
            <ListGroupItem><Label bsStyle="primary">2</Label>Item 2</ListGroupItem>
            <ListGroupItem><Label bsStyle="default">1</Label>...</ListGroupItem>
        </ListGroup>
    ),
    {
        inline: true,
    }
    )
    .addWithInfo(
        'big list with actions',
        'Desc',
        () => (
            <div >
                <div className="kbc-header">
                    <div className="kbc-title">
                        <h2 ><span className="kb-sapi-component-icon">
                            <img src="https://d1ycqiwapkz1gh.cloudfront.net/icons/dca-alook-analytics/32/1.png"
                                 width="32" height="32"/></span>
                            <a className="" href="/admin/projects/2390/applications/dca-alook-analytics">
                                aLook Analytics
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="table table-hover">
                    <span className="tbody">
                        <a className="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301665">
                            <span className="td"><strong className="kbc-config-name">test</strong>
                                <div>
                                <small>test</small>
                                </div>
                            </span>
                        <span className="td text-right kbc-component-buttons">
                            <span className="kbc-component-author">
                                <span>Created by </span>
                                <strong>jan@keboola.com</strong>
                            </span>
                            <span>
                                <button className="btn btn-link">
                                    <i className="fa kbc-icon-cup"></i>
                                </button>
                            </span>
                            <button type="button" className="btn btn-link btn btn-default">
                            <i className="fa fa-fw fa-play"></i>
                            <span> 
                        </span>
                        </button>
                        </span>
                        </a>
                        <a className="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301686">
                            <span className="td">
                                <strong className="kbc-config-name">test2</strong>
                                <div>
                                    <small>test2</small>
                                </div>
                            </span>
                                <span className="td text-right kbc-component-buttons">
                                    <span className="kbc-component-author">
                                        <span>Created by </span>
                                        <strong>jan@keboola.com</strong>
                                    </span>
                                    <span>
                                        <button className="btn btn-link">
                                            <i className="fa kbc-icon-cup"></i>
                                        </button>
                                    </span>
                                    <button type="button" className="btn btn-link btn btn-default">
                                        <i className="fa fa-fw fa-play"></i>
                                    </button>
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    ) 
    .addWithInfo(
        'settings list',
        'Desc',
        () => (
            <div className="container-fluid kbc-project-details">
                <div className="row">
                </div>
                <div className="row">
                    <div className="col-md-4 text-right">Name</div>
                    <div className="col-md-4">
                        <strong>
                            Jan Michek						</strong>
                    </div>
                    <div className="col-md-4 text-right">
                        <a href="javascript:void(0)" className="kb-project-attribute-change-modal" data-toggle="tooltip" title="Rename Project" data-options="{&quot;value&quot;:&quot;Jan Michek&quot;,&quot;label&quot;:&quot;Name&quot;,&quot;modalTitle&quot;:&quot;Rename Project&quot;,&quot;required&quot;:true,&quot;hiddenFields&quot;:{&quot;projectId&quot;:&quot;2376&quot;,&quot;attributeName&quot;:&quot;name&quot;},&quot;action&quot;:&quot;\/admin\/projects\/attribute-change&quot;}">
                            <span className="fa fa-pencil fa-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="row odd">
                    <div className="col-md-4 text-right">Organization</div>
                    <div className="col-md-4">
                        <a href="/admin/organizations/67">
                            <strong>
                                3rd Devel								</strong>
                        </a>
                    </div>
                    <div className="col-md-4 text-right">
                        <a href="javascript:void(0)" className="kb-project-change-organization-modal" data-toggle="tooltip" title="Change Organization" data-options="{&quot;maintainers&quot;:[],&quot;organizationId&quot;:67,&quot;hiddenFields&quot;:{&quot;projectId&quot;:&quot;2376&quot;},&quot;action&quot;:&quot;\/admin\/projects\/change-organization&quot;}">
                            <span className="fa fa-pencil fa-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-right">Created</div>
                    <div className="col-md-8">
                        <strong>
                            <span className="kb-date-convert" data-date="2017-03-20T16:20:32+0100" title="2017-03-20T16:20:32+0100">2017-03-20 16:20</span>
                        </strong>
                    </div>
                </div>
                <div className="row odd">
                    <div className="col-md-4 text-right">Expires</div>
                    <div className="col-md-8">
                        <span className="text-muted">Never</span>					</div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-right">Type</div>
                    <div className="col-md-3">
                        <strong>
                            Poc						</strong>
                    </div>
                    <div className="col-md-5 text-right">
                        <a href="javascript:void(0)" className="kb-project-change-type-modal btn btn-success" data-toggle="tooltip" title="" data-options="{&quot;templates&quot;:[{&quot;id&quot;:2,&quot;stringId&quot;:&quot;demo&quot;,&quot;name&quot;:&quot;Demo&quot;,&quot;description&quot;:&quot;2 days demo&quot;,&quot;expirationDays&quot;:null,&quot;billedMonthlyPrice&quot;:null,&quot;hasTryModeOn&quot;:&quot;0&quot;},{&quot;id&quot;:5,&quot;stringId&quot;:&quot;poc15Days&quot;,&quot;name&quot;:&quot;POC&quot;,&quot;description&quot;:&quot;Proof of concept. 15 days trial.&quot;,&quot;expirationDays&quot;:null,&quot;billedMonthlyPrice&quot;:null,&quot;hasTryModeOn&quot;:&quot;0&quot;},{&quot;id&quot;:6,&quot;stringId&quot;:&quot;poc30Days&quot;,&quot;name&quot;:&quot;POC&quot;,&quot;description&quot;:&quot;Proof of concept. 30 days trial.&quot;,&quot;expirationDays&quot;:null,&quot;billedMonthlyPrice&quot;:null,&quot;hasTryModeOn&quot;:&quot;0&quot;},{&quot;id&quot;:3,&quot;stringId&quot;:&quot;poc&quot;,&quot;name&quot;:&quot;POC&quot;,&quot;description&quot;:&quot;Proof of concept. 45 days trial.&quot;,&quot;expirationDays&quot;:null,&quot;billedMonthlyPrice&quot;:null,&quot;hasTryModeOn&quot;:&quot;0&quot;},{&quot;id&quot;:1,&quot;stringId&quot;:&quot;production&quot;,&quot;name&quot;:&quot;Production&quot;,&quot;description&quot;:&quot;Defaul production project.&quot;,&quot;expirationDays&quot;:0,&quot;billedMonthlyPrice&quot;:null,&quot;hasTryModeOn&quot;:&quot;0&quot;}],&quot;type&quot;:&quot;poc&quot;,&quot;expirationDays&quot;:0,&quot;hiddenFields&quot;:{&quot;projectId&quot;:&quot;2376&quot;},&quot;action&quot;:&quot;\/admin\/projects\/change-type&quot;}" data-original-title="Change Type or Expiration">
                            Request Upgrade
                        </a>
                    </div>
                </div>
                <div className="row odd">
                    <div className="col-md-4 text-right">Monthly Fee</div>
                    <div className="col-md-4">
                        <strong>
                            N/A						</strong>
                    </div>
                    <div className="col-md-4 text-right">
                        <a href="javascript:void(0)" className="kb-project-attribute-change-modal" data-toggle="tooltip" title="Change Monthly Fee" data-options="{&quot;value&quot;:null,&quot;label&quot;:&quot;Monthly Fee $&quot;,&quot;modalTitle&quot;:&quot;Change Billing Price&quot;,&quot;required&quot;:false,&quot;hiddenFields&quot;:{&quot;projectId&quot;:&quot;2376&quot;,&quot;attributeName&quot;:&quot;billedMonthlyPrice&quot;},&quot;action&quot;:&quot;\/admin\/projects\/attribute-change&quot;}">
                            <span className="fa fa-pencil fa-lg"></span>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-right">Region</div>
                    <div className="col-md-8 "><strong>us-east-1</strong></div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-right">Features</div>
                    <div className="col-md-8 ">
                        <div className="project-features-list">
                            <p>
									<span data-toggle="tooltip" title="Legacy UI for Transformations">
										<code>legacy-transformations-ui</code><br/>
									</span>
                            </p>
                            <p>
									<span data-toggle="tooltip" title="Read events from new Elastic 5 storage">
										<code>storage-events-read-elastic-5</code><br/>
									</span>
                            </p>
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
        'tree list @ job detail',
        'seen here: https://connection.keboola.com/admin/projects/2376/jobs/302856208?q=',
        () => (
            <div className="kb-tree" >
                <ul >
                    <li ><span
                        ><strong
                        >config</strong><span
                        >: </span><span
                        >254478952</span></span></li>
                    <li ><span
                        ><strong
                        >orchestration</strong><ul
                        ><li
                        ><span
                        ><strong
                        >id</strong><span
                        >: </span><span
                        >254478952</span></span></li><li
                        ><span
                        ><strong
                        >name</strong><span
                        >: </span><span
                        >booooou</span></span></li></ul></span>
                    </li>
                    <li ><span
                        ><strong
                        >initializedBy</strong><span
                        >: </span><span
                        >scheduler</span></span>
                    </li>
                    <li ><span
                        ><strong
                        >initiator</strong><ul
                        ><li
                        ><span
                        ><strong
                        >id</strong><span
                        >: </span><span
                        >70131</span></span></li><li
                        ><span
                        ><strong
                        >description</strong><span
                        >: </span><span
                        >Orchestrator booooou</span></span></li><li
                        ><span
                        ><strong
                        >userAgent</strong><span
                        >: </span><span
                        >orchestrator Scheduler</span></span></li></ul></span>
                    </li>
                    <li ><span
                        ><strong
                        >notificationsEmails</strong><ul
                        ></ul></span></li>
                    <li ><span
                        ><strong
                        >tasks</strong><span
                        >: </span><span
                        >null</span></span></li>
                </ul>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'list @ event detail',
        'seen here: https://connection.keboola.com/admin/projects/2376/storage#/',
        () => (
            <div className="tab-pane active" id="tableOverview">
                <table className="table">
                    <tbody>
                    <tr>
                        <td>ID</td>
                        <td className="ng-binding">579429564</td>
                    </tr>
                    <tr>
                        <td>Created</td>
                        <td><span ng-className="{'muted': isEmpty()}" datetime="event.created" className="ng-binding ng-isolate-scope">
  2017-07-31 19:04
  <i className="kb-datetime fa fa-clock-o ng-scope" tooltip="Original time: 2017-07-31T19:04:41+0200" ng-show="isDatetime()"></i>
</span></td>
                    </tr>
                    <tr>
                        <td>Component</td>
                        <td className="ng-binding">storage</td>
                    </tr>
                    <tr>
                        <td>Configuration ID</td>
                        <td className="ng-binding">N/A</td>
                    </tr>
                    <tr>
                        <td>Run ID</td>
                        <td className="ng-binding">N/A</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
        'list @ job detail',
        'seen here: https://connection.keboola.com/admin/projects/2376/jobs/302856208?q=',
        () => (
            <div className="table kbc-table-border-vertical kbc-detail-table"
            >
                <div className="tr">
                    <div className="td">
                        <div className="row"><span className="col-md-3"
                        >Configuration</span><strong
                            className="col-md-9"><span
                        ><a className=""
                            href="/admin/projects/2376/orchestrations/254478952"
                        >booooou</a></span></strong>
                        </div>
                        <div className="row"><span className="col-md-3"
                        >Created</span><strong
                            className="col-md-9">2017-07-31 05:17:02</strong></div>
                        <div className="row"><span className="col-md-3"
                        >Start</span><strong
                            className="col-md-9">2017-07-31 05:17:02</strong></div>
                        <div className="row"><span className="col-md-3"
                        >Initialized</span><strong
                            className="col-md-9">Orchestrator booooou</strong></div>
                        <div className="row"><span className="col-md-3"
                        >RunId</span><strong
                            className="col-md-9"><span>302856211</span></strong>
                        </div>
                    </div>
                    <div className="td">
                        <div className="row"><span className="col-md-3"
                        >Command</span><strong
                            className="col-md-9"><span className="label label-info"
                        >run</span></strong>
                        </div>
                        <div className="row"><span className="col-md-3"
                        >Status </span><span
                            className="col-md-9"><span className="label label-danger"
                        >error</span></span>
                        </div>
                        <div className="row"><span className="col-md-3"
                        >End </span><strong
                            className="col-md-9">2017-07-31 05:17:03</strong></div>
                        <div className="row"><span className="col-md-3"
                        >Token </span><strong
                            className="col-md-9">Orchestrator booooou</strong></div>
                        <div className="row"><span className="col-md-3"
                        >Duration</span><strong
                            className="col-md-9"><span
                        >1 sec</span></strong></div>
                    </div>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
