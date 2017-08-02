import React from 'react';
import {storiesOf} from '@storybook/react';
import {Table, Button} from 'react-bootstrap';
import {Table as DataTable, Column, Cell} from 'fixed-data-table';

const rows = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
    ['a3', 'b3', 'c3'],
];

storiesOf('Table')
    .addWithInfo(
        'KBC - Table @ Orchestrations',
        '',
        () => (
            <div className="table table-striped table-hover">
                <div className="thead">
                    <div className="tr"><span className="th"><strong>Name</strong></span><span className="th"><strong>Last Run</strong></span><span
                        className="th"><strong>Duration</strong></span><span
                        className="th"><strong>Schedule</strong></span><span
                        className="th"></span></div>
                </div>
                <div className="tbody"><a className="tr" href="/admin/projects/2376/orchestrations/254478952"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span> </span><span>booooou</span></span><span
                    className="td"><span title="2017-08-01 05:38:02"><i
                    className="fa fa-calendar"></i><span> </span><span
                    title="2017-08-01 05:38:02">7 hours ago</span></span></span><span className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>1 sec</span></span></span><span
                    className="td"><span><span><span>Every 0, 4, 9, 17, 30 and 38th minute past the 0 and 3rd hour</span><span> (UTC) </span></span></span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/263622569"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span> </span><span>Hrozna orchestrace</span></span><span
                    className="td"><span title="2017-07-20 14:19:59"><i
                    className="fa fa-calendar"></i><span> </span><span
                    title="2017-07-20 14:19:59">12 days ago</span></span></span><span className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>22 sec</span></span></span><span
                    className="td"><span>No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                        href="/admin/projects/2376/orchestrations/254035890"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span> </span><span>nevym</span></span><span
                    className="td"><span title="2017-07-04 02:00:29"><i
                    className="fa fa-calendar"></i><span> </span><span
                    title="2017-07-04 02:00:29">a month ago</span></span></span><span className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>4 min 33 sec</span></span></span><span
                    className="td"><span><span><span>00:00 on the 3 and 4th of every month</span><span> (UTC) </span></span></span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a>
                    </div>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Table @ Orchestration detail',
        '',
        () => (
            <table className="table table-striped table-hover kb-table-jobs kbc-cursor-pointer"
            >
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Status</th>
                    <th>Created time</th>
                    <th>Initialized</th>
                    <th>Creator</th>
                    <th>Duration</th>
                    <th className="text-right kbc-last-column-header"><span
                        title="Refresh"><span title="Refresh"
                                              className="kbc-refresh kbc-icon-cw"
                    ></span></span>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>263279294</td>
                    <td><span className="label label-danger"
                    >error</span>
                    </td>
                    <td>2017-04-26 16:37:06</td>
                    <td>manually</td>
                    <td>jan@keboola.com</td>
                    <td><span
                    >32 sec</span></td>
                    <td>
                        <div className="pull-right"><a
                            className="btn kbc-btn-link-icon"
                            href="/admin/projects/2376/orchestrations/253777920/jobs/263279294"
                        ><span className="fa fa-bars"
                        ></span></a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>253787038</td>
                    <td><span className="label label-danger"
                    >error</span>
                    </td>
                    <td>2017-04-05 18:13:04</td>
                    <td>manually</td>
                    <td>jan@janmichek.cz</td>
                    <td><span
                    >16 sec</span></td>
                    <td>
                        <div className="pull-right"><a
                            className="btn kbc-btn-link-icon"
                            href="/admin/projects/2376/orchestrations/253777920/jobs/253787038"
                        ><span className="fa fa-bars"
                        ></span></a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>253786998</td>
                    <td><span className="label label-danger"
                    >error</span>
                    </td>
                    <td>2017-04-05 18:12:24</td>
                    <td>manually</td>
                    <td>jan@janmichek.cz</td>
                    <td><span
                    >16 sec</span></td>
                    <td>
                        <div className="pull-right"><a
                            className="btn kbc-btn-link-icon"
                            href="/admin/projects/2376/orchestrations/253777920/jobs/253786998"
                        ><span className="fa fa-bars"
                        ></span></a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>253777981</td>
                    <td><span className="label label-danger"
                    >error</span>
                    </td>
                    <td>2017-04-05 17:11:53</td>
                    <td>manually</td>
                    <td>jan@janmichek.cz</td>
                    <td><span
                    >16 sec</span></td>
                    <td>
                        <div className="pull-right"><a
                            className="btn kbc-btn-link-icon"
                            href="/admin/projects/2376/orchestrations/253777920/jobs/253777981"
                        ><span className="fa fa-bars"
                        ></span></a>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Table @ Storage',
        '',
        () => (
            <table className="table table-striped table-events">
                <thead>
                <tr>
                    <th></th>
                    <th>Created</th>
                    <th>Component</th>
                    <th>Event</th>
                    <th>Creator</th>
                </tr>
                </thead>
                <tbody>
                <tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)"
                    ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)"
                           className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 12:10</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide"
                                                                  ng-show="isDeprecatedAuthorization(event)"
                                                                  tooltip="Deprecated authorization method used."></i>
                    </td>
                </tr>
                <tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)"
                    ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)"
                           className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 12:10</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide"
                                                                  ng-show="isDeprecatedAuthorization(event)"
                                                                  tooltip="Deprecated authorization method used."></i>
                    </td>
                </tr>
                <tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)"
                    ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)"
                           className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 12:10</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide"
                                                                  ng-show="isDeprecatedAuthorization(event)"
                                                                  tooltip="Deprecated authorization method used."></i>
                    </td>
                </tr>
                </tbody>
            </table>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Table @ Jobs',
        '',
        () => (
            <div className="table table-striped table-hover">
                <div className="thead">
                    <div className="tr"><span className="th"
                    ><strong
                    >ID</strong></span><span className="th"
                    ><strong
                    >Status</strong></span><span className="th"
                    ><strong
                    >Component</strong></span><span className="th"
                    ><strong
                    >Configuration</strong></span><span className="th"
                    ><strong
                    >Action</strong></span><span className="th"
                    ><strong
                    >Token</strong></span><span className="th"
                    ><strong
                    >Created time</strong></span><span className="th"
                    ><strong
                    >Duration</strong></span></div>
                </div>
                <div className="tbody"><a className="tr"
                                          href="/admin/projects/2376/jobs/303308705?q="
                >
                    <div className="td">303308705</div>
                    <div className="td"><span
                        className="label label-danger"
                    >error</span></div>
                    <div className="td"><span
                        className="kb-sapi-component-icon"><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                    > </span><span
                    ><span
                    >Orchestrator</span><span
                    > </span></span></div>
                    <div className="td"><span
                    >booooou</span></div>
                    <div className="td">run</div>
                    <div className="td">Orchestrator booooou</div>
                    <div className="td">2017-08-01 05:38:02</div>
                    <div className="td"><span
                    >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303303689?q="
                >
                    <div className="td">303303689</div>
                    <div className="td"><span
                        className="label label-danger"
                    >error</span></div>
                    <div className="td"><span
                        className="kb-sapi-component-icon"><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                    > </span><span
                    ><span
                    >Orchestrator</span><span
                    > </span></span></div>
                    <div className="td"><span
                    >booooou</span></div>
                    <div className="td">run</div>
                    <div className="td">Orchestrator booooou</div>
                    <div className="td">2017-08-01 05:30:05</div>
                    <div className="td"><span
                    >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303292219?q="
                >
                    <div className="td">303292219</div>
                    <div className="td"><span
                        className="label label-danger"
                    >error</span></div>
                    <div className="td"><span
                        className="kb-sapi-component-icon"><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                    > </span><span
                    ><span
                    >Orchestrator</span><span
                    > </span></span></div>
                    <div className="td"><span
                    >booooou</span></div>
                    <div className="td">run</div>
                    <div className="td">Orchestrator booooou</div>
                    <div className="td">2017-08-01 05:17:02</div>
                    <div className="td"><span
                    >1 sec</span></div>
                </a></div>
            </div>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Table @ Storage files',
        'seen here: https://connection.keboola.com/admin/projects/2376/storage#/file-uploads',
        () => (
            <table className="table table-striped file-uploads" ng-show="files.length > 0">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Uploaded</th>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Public</th>
                    <th>Encrypted</th>
                    <th>Permanent</th>
                    <th>Creator</th>
                    <th>Tags</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:300998377" className="ng-binding"
                           href="#/file-uploads/?q=id:300998377">
                            300998377
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-07-25 18:21
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/07/25/300998376.fl_insurance_sample.csv?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=b18a0e0fd78bb689ab23a877c30bfbf480b6d86c8d309f36c015e31f1dbbfd44"
                           target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">fl_insurance_sample.csv</a>
                    </td>
                    <td className="ng-binding">
                        3.93MB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip=""
                           title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip=""
                           title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i
                            className="fa fa-times"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip=""
               title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 204 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 70838" className="ng-binding">jan@keboola.com</span>
                    </td>
                    <td>

                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url"
                                            copy-message="File URL was copied into your clipboard!"
                                            className="ng-isolate-scope"><span ng-transclude=""
                                                                               className="kb-copy-button" title=""
                                                                               data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/07/25/300998376.fl_insurance_sample.csv?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=b18a0e0fd78bb689ab23a877c30bfbf480b6d86c8d309f36c015e31f1dbbfd44"
                                                                               copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/07/25/300998376.fl_insurance_sample.csv?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=b18a0e0fd78bb689ab23a877c30bfbf480b6d86c8d309f36c015e31f1dbbfd44"
                           target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm=""
                           message="Do you really want to delete file 300998377 (fl_insurance_sample.csv)?"
                           confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)"
                           header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr>
                <tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:298961927" className="ng-binding"
                           href="#/file-uploads/?q=id:298961927">
                            298961927
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-07-20 14:20
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/298961887.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=ae918e6f6c468537887f41ad7f7a568daab5952c5547b2afa45736a1b6f65a19"
                           target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.feed.csv.gz</a>
                    </td>
                    <td className="ng-binding">
                        163.33KB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip=""
                           title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip=""
                           title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i
                            className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip=""
               title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 49 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 71264" className="ng-binding">Orchestrator Hrozna orchestrace</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags"
                              ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url"
                                            copy-message="File URL was copied into your clipboard!"
                                            className="ng-isolate-scope"><span ng-transclude=""
                                                                               className="kb-copy-button" title=""
                                                                               data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/298961887.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=ae918e6f6c468537887f41ad7f7a568daab5952c5547b2afa45736a1b6f65a19"
                                                                               copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/298961887.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=ae918e6f6c468537887f41ad7f7a568daab5952c5547b2afa45736a1b6f65a19"
                           target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm=""
                           message="Do you really want to delete file 298961927 (in.c-keboola-ex-facebook-253350349.feed.csv.gz)?"
                           confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)"
                           header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr>
                <tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:298961914" className="ng-binding"
                           href="#/file-uploads/?q=id:298961914">
                            298961914
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-07-20 14:20
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/298961884.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=afc486ec0a476233b21eebaa295ff15cba5f5cf2a032ffbfd4a79a858ccf032a"
                           target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.accounts.csv</a>
                    </td>
                    <td className="ng-binding">
                        215B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip=""
                           title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip=""
                           title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i
                            className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip=""
               title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 49 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 71264" className="ng-binding">Orchestrator Hrozna orchestrace</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags"
                              ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url"
                                            copy-message="File URL was copied into your clipboard!"
                                            className="ng-isolate-scope"><span ng-transclude=""
                                                                               className="kb-copy-button" title=""
                                                                               data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/298961884.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=afc486ec0a476233b21eebaa295ff15cba5f5cf2a032ffbfd4a79a858ccf032a"
                                                                               copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/298961884.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=afc486ec0a476233b21eebaa295ff15cba5f5cf2a032ffbfd4a79a858ccf032a"
                           target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm=""
                           message="Do you really want to delete file 298961914 (in.c-keboola-ex-facebook-253350349.accounts.csv)?"
                           confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)"
                           header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr>

                </tbody>
            </table>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Table @ Versions',
        'seen here: https://connection.keboola.com/admin/projects/2376/extractors/esnerda.ex-ares/282215725/versions',
        () => (
            <table className="table table-striped table-hover">
                <thead>
                <tr>
                    <th>#</th>
                    <th></th>
                    <th>Description</th>
                    <th>Changed</th>
                    <th>Created by</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>3</td>
                    <td><span className="fa fa-check-circle fa-fw kbc-version-icon last"></span></td>
                    <td>Add input table in.c-keboola-ex-facebook-253350349.accounts</td>
                    <td><span title="2017-07-31 16:36:04"><i
                        className="fa fa-fw fa-calendar"></i><span>a day ago</span></span></td>
                    <td>jan@keboola.com</td>
                    <td className="text-right">
                        <button className="btn btn-link"><span> </span><span className="text-muted"><em
                            className="fa fa-fw fa-files-o"></em></span>
                            <noscript></noscript>
                            <span> </span></button>
                        <button className="btn btn-link"><em className="fa fa-code-fork fa-fw"></em>
                            <noscript></noscript>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><span className="fa fa-circle-o fa-fw kbc-version-icon"></span></td>
                    <td>Add input table in.c-keboola-ex-facebook-253350349.feed</td>
                    <td><span title="2017-07-31 16:35:36"><i
                        className="fa fa-fw fa-calendar"></i><span>a day ago</span></span></td>
                    <td>jan@keboola.com</td>
                    <td className="text-right">
                        <button className="btn btn-link"><em className="fa fa-undo fa-fw"></em>
                            <noscript></noscript>
                        </button>
                        <button className="btn btn-link"><span> </span><span className="text-muted"><em
                            className="fa fa-fw fa-files-o"></em></span>
                            <noscript></noscript>
                            <span> </span></button>
                        <button className="btn btn-link"><em className="fa fa-code-fork fa-fw"></em>
                            <noscript></noscript>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><span className="fa fa-circle-o fa-fw kbc-version-icon"></span></td>
                    <td>
                        <small><em>No description</em></small>
                    </td>
                    <td><span title="2017-05-31 13:19:45"><i
                        className="fa fa-fw fa-calendar"></i><span>2 months ago</span></span>
                    </td>
                    <td>jan@keboola.com</td>
                    <td className="text-right">
                        <button className="btn btn-link"><em className="fa fa-undo fa-fw"></em>
                            <noscript></noscript>
                        </button>
                        <button className="btn btn-link"><em className="fa fa-code-fork fa-fw"></em>
                            <noscript></noscript>
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Table Fixed',
        'https://facebook.github.io/fixed-data-table/example-object-data.html',
        () => (
            <DataTable
                rowHeight={50}
                rowsCount={rows.length}
                width={500}
                height={300}
                headerHeight={50}>
                <Column
                    header={<Cell>Col 1</Cell>}
                    cell={<Cell>Column 1 static content</Cell>}
                    width={200}
                />
                <Column
                    header={<Cell>Col 2</Cell>}
                    cell={<Cell>Column 1 static content</Cell>}
                    width={200}
                />
                <Column
                    header={<Cell>Col 3</Cell>}
                    cell={<Cell>Column 1 static content</Cell>}
                    width={100}
                />
            </DataTable>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Table concepts',
        'more concepts here https://uxdesign.cc/design-better-data-tables-4ecc99d23356',
        () => (
            <table></table>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Table with actions',
        'Desc',
        () => (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                        <Button bsStyle="link">
                            <i className="fa kbc-icon-cup"></i>
                        </Button>
                        <Button bsStyle="link">
                            <i className="fa fa-fw fa-play"></i>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>Thornton</td>
                    <td>
                        <Button bsStyle="link">
                            <i className="fa kbc-icon-cup"></i>
                        </Button>
                        <Button bsStyle="link">
                            <i className="fa fa-fw fa-play"></i>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    <td>
                        <Button bsStyle="link">
                            <i className="fa kbc-icon-cup"></i>
                        </Button>
                        <Button bsStyle="link">
                            <i className="fa fa-fw fa-play"></i>
                        </Button>
                    </td>
                </tr>
                </tbody>
            </Table>
        ),
        {
            inline: true,
        }
    )
;
