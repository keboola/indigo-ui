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
        'default',
        'Desc',
        () => (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan="2">Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
                </tbody>
            </Table>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
    'with actions',
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
    .addWithInfo(
        'Data table',
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
        'more concepts',
        'more concepts here https://uxdesign.cc/design-better-data-tables-4ecc99d23356',
        () => (
            <table></table>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'table @ ORchestrations',
        '',
        () => (
            <div className="table table-striped table-hover">
                <div className="thead">
                    <div className="tr"><span className="th"><strong>Name</strong></span><span className="th"><strong>Last Run</strong></span><span
                        className="th"><strong>Duration</strong></span><span className="th"><strong>Schedule</strong></span><span
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
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/263622569"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span> </span><span>Hrozna orchestrace</span></span><span
                    className="td"><span title="2017-07-20 14:19:59"><i
                    className="fa fa-calendar"></i><span> </span><span
                    title="2017-07-20 14:19:59">12 days ago</span></span></span><span className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>22 sec</span></span></span><span className="td"><span>No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button className="btn btn-link"><i
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
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/258978343"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span> </span><span>GDW orchestrace</span></span><span
                    className="td"><span title="2017-05-17 12:52:30"><i
                    className="fa fa-calendar"></i><span> </span><span title="2017-05-17 12:52:30">2 months ago</span></span></span><span
                    className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>35 sec</span></span></span><span className="td"><span>No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/253397080"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span> </span><span>fb</span></span><span
                    className="td"><span title="2017-05-05 00:18:54"><i
                    className="fa fa-calendar"></i><span> </span><span title="2017-05-05 00:18:54">3 months ago</span></span></span><span
                    className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>51 sec</span></span></span><span className="td"><span>No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/253777920"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span> </span><span>Dat Or</span></span><span
                    className="td"><span title="2017-04-26 16:37:06"><i
                    className="fa fa-calendar"></i><span> </span><span title="2017-04-26 16:37:06">3 months ago</span></span></span><span
                    className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>32 sec</span></span></span><span className="td"><span>No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/254034676"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span> </span><span>test it</span></span><span
                    className="td"><span title="2017-04-06 14:11:11"><i
                    className="fa fa-calendar"></i><span> </span><span title="2017-04-06 14:11:11">4 months ago</span></span></span><span
                    className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>8 sec</span></span></span><span
                    className="td"><span><span><span>00:00, 00:15, 15:00 and 15:15 on Mon</span><span> (UTC) </span></span></span></span><span
                    className="td text-right kbc-no-wrap"><span><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-times"></i></button><span><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/253051623"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span> </span><span>hjhj</span></span><span
                    className="td"><span title="2017-04-03 13:04:27"><i
                    className="fa fa-calendar"></i><span> </span><span title="2017-04-03 13:04:27">4 months ago</span></span></span><span
                    className="td"><span><i
                    className="fa fa-clock-o"></i><span> </span><span>8 sec</span></span></span><span
                    className="td"><span>No Schedule</span></span><span className="td text-right kbc-no-wrap"><span><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/254491600"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span> </span><span>123</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span>No Schedule</span></span><span className="td text-right kbc-no-wrap"><span><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/301226688"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span> </span><span>dfsdfs</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span>No Schedule</span></span><span className="td text-right kbc-no-wrap"><span><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/263293442"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span> </span><span>prazdna</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span>No Schedule</span></span><span className="td text-right kbc-no-wrap"><span><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/256532766"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span> </span><span>qwrqereqw</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span>No Schedule</span></span><span className="td text-right kbc-no-wrap"><span><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript></noscript></span></span></a></div>
            </div>
        ),
        {
            inline: true,
        }
    ) .addWithInfo(
        'table @ ORchestration detail',
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
    ).addWithInfo(
        'Table @ Storage',
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
                <tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 12:10</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 12:10</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 12:10</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 11:50</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 11:50</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 11:27</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 11:26</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 11:26</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:42</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:42</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:42</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:41</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:41</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:41</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:37</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:37</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 10:37</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:38</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:38</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303308705 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:30</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:30</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303303689 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:17</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:17</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303292219 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:09</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:09</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303288979 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:04</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:04</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303286014 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:00</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 05:00</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303283263 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:38</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:38</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303195285 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:30</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:30</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303190299 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:17</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:17</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303178794 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:10</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:04</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303172465 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope error">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:00</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job contains no tasks for execution</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-08-01 02:00</td>
                    <td className="ng-binding">orchestrator</td>
                    <td className="ng-binding">Orchestration job 303170571 scheduled</td>
                    <td className="ng-binding">Orchestrator booooou <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 19:09</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 19:09</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 19:09</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 19:04</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 19:04</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 19:04</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 18:06</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 18:06</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed tables</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 18:06</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 18:05</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed shared buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr><tr ng-repeat="event in events.events | orderBy:'id':true" ng-className="eventClass(event)" ng-click="openModal(event)" className="ng-scope">
                    <td><i ng-className="eventType(event).icon" tooltip="eventTypeTooltip(event)" className="ng-scope"></i></td>
                    <td className="ng-binding">2017-07-31 18:05</td>
                    <td className="ng-binding">storage</td>
                    <td className="ng-binding">Listed buckets</td>
                    <td className="ng-binding">jan@keboola.com <i className="fa fa-exclamation-circle ng-scope ng-hide" ng-show="isDeprecatedAuthorization(event)" tooltip="Deprecated authorization method used."></i></td>
                </tr>
                </tbody>
            </table>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
        'table @ jobs',
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
                </a><a className="tr" href="/admin/projects/2376/jobs/303288979?q="
                      >
                    <div className="td">303288979</div>
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
                    <div className="td">2017-08-01 05:09:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303286014?q="
                      >
                    <div className="td">303286014</div>
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
                    <div className="td">2017-08-01 05:04:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303283263?q="
                      >
                    <div className="td">303283263</div>
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
                    <div className="td">2017-08-01 05:00:15</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303195285?q="
                      >
                    <div className="td">303195285</div>
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
                    <div className="td">2017-08-01 02:38:03</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303190299?q="
                      >
                    <div className="td">303190299</div>
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
                    <div className="td">2017-08-01 02:30:04</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303178794?q="
                      >
                    <div className="td">303178794</div>
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
                    <div className="td">2017-08-01 02:17:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303172465?q="
                      >
                    <div className="td">303172465</div>
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
                    <div className="td">2017-08-01 02:04:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303170571?q="
                      >
                    <div className="td">303170571</div>
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
                    <div className="td">2017-08-01 02:00:26</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302873517?q="
                      >
                    <div className="td">302873517</div>
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
                    <div className="td">2017-07-31 05:38:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302868705?q="
                      >
                    <div className="td">302868705</div>
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
                    <div className="td">2017-07-31 05:30:04</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302856208?q="
                      >
                    <div className="td">302856208</div>
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
                    <div className="td">2017-07-31 05:17:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302853238?q="
                      >
                    <div className="td">302853238</div>
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
                    <div className="td">2017-07-31 05:09:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302850366?q="
                      >
                    <div className="td">302850366</div>
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
                    <div className="td">2017-07-31 05:04:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302847685?q="
                      >
                    <div className="td">302847685</div>
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
                    <div className="td">2017-07-31 05:00:15</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302761229?q="
                      >
                    <div className="td">302761229</div>
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
                    <div className="td">2017-07-31 02:38:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302756448?q="
                      >
                    <div className="td">302756448</div>
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
                    <div className="td">2017-07-31 02:30:05</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302744117?q="
                      >
                    <div className="td">302744117</div>
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
                    <div className="td">2017-07-31 02:17:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302738777?q="
                      >
                    <div className="td">302738777</div>
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
                    <div className="td">2017-07-31 02:09:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302736342?q="
                      >
                    <div className="td">302736342</div>
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
                    <div className="td">2017-07-31 02:04:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302734875?q="
                      >
                    <div className="td">302734875</div>
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
                    <div className="td">2017-07-31 02:00:31</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302420739?q="
                      >
                    <div className="td">302420739</div>
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
                    <div className="td">2017-07-30 05:38:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302419949?q="
                      >
                    <div className="td">302419949</div>
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
                    <div className="td">2017-07-30 05:30:04</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302414880?q="
                      >
                    <div className="td">302414880</div>
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
                    <div className="td">2017-07-30 05:17:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302413861?q="
                      >
                    <div className="td">302413861</div>
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
                    <div className="td">2017-07-30 05:09:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302413095?q="
                      >
                    <div className="td">302413095</div>
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
                    <div className="td">2017-07-30 05:04:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302411550?q="
                      >
                    <div className="td">302411550</div>
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
                    <div className="td">2017-07-30 05:00:14</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302379419?q="
                      >
                    <div className="td">302379419</div>
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
                    <div className="td">2017-07-30 02:38:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302378189?q="
                      >
                    <div className="td">302378189</div>
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
                    <div className="td">2017-07-30 02:30:04</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302370918?q="
                      >
                    <div className="td">302370918</div>
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
                    <div className="td">2017-07-30 02:17:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302367547?q="
                      >
                    <div className="td">302367547</div>
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
                    <div className="td">2017-07-30 02:09:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302365272?q="
                      >
                    <div className="td">302365272</div>
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
                    <div className="td">2017-07-30 02:04:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302362638?q="
                      >
                    <div className="td">302362638</div>
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
                    <div className="td">2017-07-30 02:00:32</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302127801?q="
                      >
                    <div className="td">302127801</div>
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
                    <div className="td">2017-07-29 05:38:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302126734?q="
                      >
                    <div className="td">302126734</div>
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
                    <div className="td">2017-07-29 05:30:04</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302121702?q="
                      >
                    <div className="td">302121702</div>
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
                    <div className="td">2017-07-29 05:17:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302120528?q="
                      >
                    <div className="td">302120528</div>
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
                    <div className="td">2017-07-29 05:09:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302119629?q="
                      >
                    <div className="td">302119629</div>
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
                    <div className="td">2017-07-29 05:04:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302118103?q="
                      >
                    <div className="td">302118103</div>
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
                    <div className="td">2017-07-29 05:00:13</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302088569?q="
                      >
                    <div className="td">302088569</div>
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
                    <div className="td">2017-07-29 02:38:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302087752?q="
                      >
                    <div className="td">302087752</div>
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
                    <div className="td">2017-07-29 02:30:06</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302082326?q="
                      >
                    <div className="td">302082326</div>
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
                    <div className="td">2017-07-29 02:17:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302076818?q="
                      >
                    <div className="td">302076818</div>
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
                    <div className="td">2017-07-29 02:04:02</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302074584?q="
                      >
                    <div className="td">302074584</div>
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
                    <div className="td">2017-07-29 02:00:28</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301800774?q="
                      >
                    <div className="td">301800774</div>
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
                    <div className="td">2017-07-28 05:38:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301798990?q="
                      >
                    <div className="td">301798990</div>
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
                    <div className="td">2017-07-28 05:30:05</div>
                    <div className="td"><span
                       >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301792422?q="
                      >
                    <div className="td">301792422</div>
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
                    <div className="td">2017-07-28 05:17:02</div>
                    <div className="td"><span
                       ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301791430?q="
                      >
                    <div className="td">301791430</div>
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
                    <div className="td">2017-07-28 05:09:02</div>
                    <div className="td"><span
                       ></span></div>
                </a></div>
            </div>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
        'table @ files storage',
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
                        <a kb-href="/file-uploads/?q=id:300998377" className="ng-binding" href="#/file-uploads/?q=id:300998377">
                            300998377
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-07-25 18:21
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/07/25/300998376.fl_insurance_sample.csv?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=b18a0e0fd78bb689ab23a877c30bfbf480b6d86c8d309f36c015e31f1dbbfd44" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">fl_insurance_sample.csv</a>
                    </td>
                    <td className="ng-binding">
                        3.93MB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-times"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
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
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/07/25/300998376.fl_insurance_sample.csv?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=b18a0e0fd78bb689ab23a877c30bfbf480b6d86c8d309f36c015e31f1dbbfd44" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/07/25/300998376.fl_insurance_sample.csv?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=b18a0e0fd78bb689ab23a877c30bfbf480b6d86c8d309f36c015e31f1dbbfd44" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 300998377 (fl_insurance_sample.csv)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:298961927" className="ng-binding" href="#/file-uploads/?q=id:298961927">
                            298961927
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-07-20 14:20
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/298961887.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=ae918e6f6c468537887f41ad7f7a568daab5952c5547b2afa45736a1b6f65a19" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.feed.csv.gz</a>
                    </td>
                    <td className="ng-binding">
                        163.33KB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
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
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/298961887.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=ae918e6f6c468537887f41ad7f7a568daab5952c5547b2afa45736a1b6f65a19" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/298961887.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=ae918e6f6c468537887f41ad7f7a568daab5952c5547b2afa45736a1b6f65a19" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 298961927 (in.c-keboola-ex-facebook-253350349.feed.csv.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:298961914" className="ng-binding" href="#/file-uploads/?q=id:298961914">
                            298961914
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-07-20 14:20
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/298961884.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=afc486ec0a476233b21eebaa295ff15cba5f5cf2a032ffbfd4a79a858ccf032a" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.accounts.csv</a>
                    </td>
                    <td className="ng-binding">
                        215B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
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
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/298961884.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=afc486ec0a476233b21eebaa295ff15cba5f5cf2a032ffbfd4a79a858ccf032a" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/298961884.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=afc486ec0a476233b21eebaa295ff15cba5f5cf2a032ffbfd4a79a858ccf032a" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 298961914 (in.c-keboola-ex-facebook-253350349.accounts.csv)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:284920976" className="ng-binding" href="#/file-uploads/?q=id:284920976">
                            284920976
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-06-06 16:04
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/sys/c-wr-google-drive/mysecondgdrivewriter/284920951.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=1db1b2d0f2a0ea5a68db7abd628cdf718de4b802390064a452022283fcb9f75e" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">sys.c-wr-google-drive.mysecondgdrivewriter.csv</a>
                    </td>
                    <td className="ng-binding">
                        341B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 35 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 70838" className="ng-binding">jan@keboola.com</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/sys/c-wr-google-drive/mysecondgdrivewriter/284920951.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=1db1b2d0f2a0ea5a68db7abd628cdf718de4b802390064a452022283fcb9f75e" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/sys/c-wr-google-drive/mysecondgdrivewriter/284920951.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=1db1b2d0f2a0ea5a68db7abd628cdf718de4b802390064a452022283fcb9f75e" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 284920976 (sys.c-wr-google-drive.mysecondgdrivewriter.csv)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:284920904" className="ng-binding" href="#/file-uploads/?q=id:284920904">
                            284920904
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-06-06 16:03
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/sys/c-wr-db-redshift-qwe/in_c-keboola-ex-facebook-253350349_feed/284920883.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=dce40d232a419f7f36b4f01eaeb6d90fefccffd76b41f4895f91e62250a95047" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">sys.c-wr-db-redshift-qwe.in_c-keboola-ex-facebook-253350349_feed.csv</a>
                    </td>
                    <td className="ng-binding">
                        14B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 35 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 70838" className="ng-binding">jan@keboola.com</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/sys/c-wr-db-redshift-qwe/in_c-keboola-ex-facebook-253350349_feed/284920883.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=dce40d232a419f7f36b4f01eaeb6d90fefccffd76b41f4895f91e62250a95047" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/sys/c-wr-db-redshift-qwe/in_c-keboola-ex-facebook-253350349_feed/284920883.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=dce40d232a419f7f36b4f01eaeb6d90fefccffd76b41f4895f91e62250a95047" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 284920904 (sys.c-wr-db-redshift-qwe.in_c-keboola-ex-facebook-253350349_feed.csv)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:284920853" className="ng-binding" href="#/file-uploads/?q=id:284920853">
                            284920853
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-06-06 16:03
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/out/c-main/fb-out/284920817.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=4cdca514f144ba957e0b8c8a21e5ccd93c75ac60103bca3504395861697f46f3" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">out.c-main.fb-out.csv</a>
                    </td>
                    <td className="ng-binding">
                        172B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 35 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 70838" className="ng-binding">jan@keboola.com</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/out/c-main/fb-out/284920817.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=4cdca514f144ba957e0b8c8a21e5ccd93c75ac60103bca3504395861697f46f3" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/out/c-main/fb-out/284920817.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=4cdca514f144ba957e0b8c8a21e5ccd93c75ac60103bca3504395861697f46f3" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 284920853 (out.c-main.fb-out.csv)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:282224180" className="ng-binding" href="#/file-uploads/?q=id:282224180">
                            282224180
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-31 13:56
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224179.592eaf82c1f13_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=eb699ae081d0b67b6b4682009b6a9376220a81b905ad7ea959063cc492f07c18" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">592eaf82c1f13_qwe.gz</a>
                    </td>
                    <td className="ng-binding">
                        59B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-times"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 210 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 70838" className="ng-binding">jan@keboola.com</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   file-import
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224179.592eaf82c1f13_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=eb699ae081d0b67b6b4682009b6a9376220a81b905ad7ea959063cc492f07c18" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224179.592eaf82c1f13_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=eb699ae081d0b67b6b4682009b6a9376220a81b905ad7ea959063cc492f07c18" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 282224180 (592eaf82c1f13_qwe.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:282224131" className="ng-binding" href="#/file-uploads/?q=id:282224131">
                            282224131
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-31 13:56
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224130.592eaf5c34a25_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=2a4be9740265af9fb8226624e3cb72aaab5f596fcf658040b760b03a8b9ebbd3" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">592eaf5c34a25_qwe.gz</a>
                    </td>
                    <td className="ng-binding">
                        111B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-times"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 210 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 70838" className="ng-binding">jan@keboola.com</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   file-import
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224130.592eaf5c34a25_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=2a4be9740265af9fb8226624e3cb72aaab5f596fcf658040b760b03a8b9ebbd3" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224130.592eaf5c34a25_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=2a4be9740265af9fb8226624e3cb72aaab5f596fcf658040b760b03a8b9ebbd3" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 282224131 (592eaf5c34a25_qwe.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:282224061" className="ng-binding" href="#/file-uploads/?q=id:282224061">
                            282224061
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-31 13:55
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224060.592eaf1c258e9_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7e6be307f4f4bb31528b3d9f59733d32c17d8d340a749e90919695cd0e85cd3d" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">592eaf1c258e9_qwe.gz</a>
                    </td>
                    <td className="ng-binding">
                        61B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 210 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 70838" className="ng-binding">jan@keboola.com</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   file-import
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224060.592eaf1c258e9_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7e6be307f4f4bb31528b3d9f59733d32c17d8d340a749e90919695cd0e85cd3d" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/31/282224060.592eaf1c258e9_qwe.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7e6be307f4f4bb31528b3d9f59733d32c17d8d340a749e90919695cd0e85cd3d" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 282224061 (592eaf1c258e9_qwe.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266339380" className="ng-binding" href="#/file-uploads/?q=id:266339380">
                            266339380
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 18:11
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266339355.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7a9333d96c236bd3c5936ebb9ff59e292bb6afc52fb45056c4cf6f081a723600" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.accounts.csv</a>
                    </td>
                    <td className="ng-binding">
                        215B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 31 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 71264" className="ng-binding">Orchestrator Hrozna orchestrace</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266339355.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7a9333d96c236bd3c5936ebb9ff59e292bb6afc52fb45056c4cf6f081a723600" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266339355.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7a9333d96c236bd3c5936ebb9ff59e292bb6afc52fb45056c4cf6f081a723600" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266339380 (in.c-keboola-ex-facebook-253350349.accounts.csv)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225685" className="ng-binding" href="#/file-uploads/?q=id:266225685">
                            266225685
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:59
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266225679.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=50fccbe51536d2963b5fc064522d02a9b8e56f902e538da93d7608733fc7be9f" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.accounts.csv.gz</a>
                    </td>
                    <td className="ng-binding">
                        237B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 31 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266225679.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=50fccbe51536d2963b5fc064522d02a9b8e56f902e538da93d7608733fc7be9f" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266225679.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=50fccbe51536d2963b5fc064522d02a9b8e56f902e538da93d7608733fc7be9f" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225685 (in.c-keboola-ex-facebook-253350349.accounts.csv.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225678" className="ng-binding" href="#/file-uploads/?q=id:266225678">
                            266225678
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:59
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/266225676.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=1a44ed2c793e771d0d375ac035d714853db94737472cc6bc418fabe49d5b6e28" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.feed.csv.gz</a>
                    </td>
                    <td className="ng-binding">
                        164.66KB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 31 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/266225676.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=1a44ed2c793e771d0d375ac035d714853db94737472cc6bc418fabe49d5b6e28" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/266225676.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=1a44ed2c793e771d0d375ac035d714853db94737472cc6bc418fabe49d5b6e28" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225678 (in.c-keboola-ex-facebook-253350349.feed.csv.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225650" className="ng-binding" href="#/file-uploads/?q=id:266225650">
                            266225650
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:58
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225649.feedmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=501780eaf816eece7f4c0ef24ba87f84c13290972d137561566b7fc52c2fcfdc" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">feed</a>
                    </td>
                    <td className="ng-binding">
                        417.29KB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 181 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225649.feedmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=501780eaf816eece7f4c0ef24ba87f84c13290972d137561566b7fc52c2fcfdc" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225649.feedmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=501780eaf816eece7f4c0ef24ba87f84c13290972d137561566b7fc52c2fcfdc" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225650 (feed)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225625" className="ng-binding" href="#/file-uploads/?q=id:266225625">
                            266225625
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:58
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225624.accounts.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=0d54c446f767957965956c608e3b7a4e7f9f3400f3ecb4960de7661601364876" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">accounts.gz</a>
                    </td>
                    <td className="ng-binding">
                        89B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 181 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-import
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225624.accounts.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=0d54c446f767957965956c608e3b7a4e7f9f3400f3ecb4960de7661601364876" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225624.accounts.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=0d54c446f767957965956c608e3b7a4e7f9f3400f3ecb4960de7661601364876" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225625 (accounts.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225562" className="ng-binding" href="#/file-uploads/?q=id:266225562">
                            266225562
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:57
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266225554.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=c5006b1c2aa8c7618c586af9c30f6af5cbe19b9cdc804bd8f052b31e435b3fd3" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.accounts.csv.gz</a>
                    </td>
                    <td className="ng-binding">
                        237B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 31 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266225554.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=c5006b1c2aa8c7618c586af9c30f6af5cbe19b9cdc804bd8f052b31e435b3fd3" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/266225554.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=c5006b1c2aa8c7618c586af9c30f6af5cbe19b9cdc804bd8f052b31e435b3fd3" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225562 (in.c-keboola-ex-facebook-253350349.accounts.csv.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225552" className="ng-binding" href="#/file-uploads/?q=id:266225552">
                            266225552
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:57
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/266225544.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=6ddd8b913b7ad1d5f8c0a487b4a78324c96146566a81562e93822e7467816000" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.feed.csv.gz</a>
                    </td>
                    <td className="ng-binding">
                        164.66KB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 31 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/266225544.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=6ddd8b913b7ad1d5f8c0a487b4a78324c96146566a81562e93822e7467816000" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/feed/266225544.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=6ddd8b913b7ad1d5f8c0a487b4a78324c96146566a81562e93822e7467816000" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225552 (in.c-keboola-ex-facebook-253350349.feed.csv.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225494" className="ng-binding" href="#/file-uploads/?q=id:266225494">
                            266225494
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:56
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225493.feedmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=9857757dd8027a703d1dc6bc397b2ad138b47354653305e3cc2e4a315baf2ab8" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">feed</a>
                    </td>
                    <td className="ng-binding">
                        417.29KB
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 181 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225493.feedmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=9857757dd8027a703d1dc6bc397b2ad138b47354653305e3cc2e4a315baf2ab8" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225493.feedmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=9857757dd8027a703d1dc6bc397b2ad138b47354653305e3cc2e4a315baf2ab8" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225494 (feed)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:266225472" className="ng-binding" href="#/file-uploads/?q=id:266225472">
                            266225472
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-05-02 10:56
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225471.accounts.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=c016e3d04ba28e688fccf781ce451445583306b1687ea8f784074f5d2f834928" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">accounts.gz</a>
                    </td>
                    <td className="ng-binding">
                        89B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 181 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-import
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225471.accounts.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=c016e3d04ba28e688fccf781ce451445583306b1687ea8f784074f5d2f834928" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-180/2376/files/2017/05/02/266225471.accounts.gz?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=c016e3d04ba28e688fccf781ce451445583306b1687ea8f784074f5d2f834928" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 266225472 (accounts.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:263627282" className="ng-binding" href="#/file-uploads/?q=id:263627282">
                            263627282
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-04-27 14:29
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/263627248.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=cf0254a0034db908535322e8149a9e8b10dd52ddf35654a0f6bf10ee7dc7ef89" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.accounts.csv</a>
                    </td>
                    <td className="ng-binding">
                        215B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 56 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 71264" className="ng-binding">Orchestrator Hrozna orchestrace</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/263627248.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=cf0254a0034db908535322e8149a9e8b10dd52ddf35654a0f6bf10ee7dc7ef89" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/263627248.csvmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=cf0254a0034db908535322e8149a9e8b10dd52ddf35654a0f6bf10ee7dc7ef89" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 263627282 (in.c-keboola-ex-facebook-253350349.accounts.csv)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
                            <span className="fa fa-trash-o"></span>
                        </a>
                    </td>
                </tr><tr ng-repeat="file in files track by file.id" className="ng-scope">
                    <td>
                        <a kb-href="/file-uploads/?q=id:263260911" className="ng-binding" href="#/file-uploads/?q=id:263260911">
                            263260911
                        </a>
                    </td>
                    <td className="ng-binding">
                        2017-04-26 15:50
                    </td>
                    <td>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/263260894.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7d484ffb30312375c535a9c2280401731ca55e6a2ce36ecb827f3dea3932b94c" target="_blank" tooltip="" title="Download file" className="ng-scope ng-binding">in.c-keboola-ex-facebook-253350349.accounts.csv.gz</a>
                    </td>
                    <td className="ng-binding">
                        237B
                    </td>
                    <td>
                        <i className="fa fa-check ng-scope ng-hide" ng-show="file.isPublic" tooltip="" title="File is public"></i>
                        <i className="fa fa-times ng-scope" ng-hide="file.isPublic" tooltip="" title="File is not public"></i>
                    </td>
                    <td>
                        <kb-check ng-model="file.isEncrypted" className="ng-pristine ng-valid"><i className="fa fa-check"></i></kb-check>
                    </td>
                    <td>
                               <span file="file" className="ng-isolate-scope">
			<i className="fa fa-check ng-scope ng-hide" ng-show="file.maxAgeDays == null" tooltip="" title="File is permanent"></i>
			<i className="fa fa-times ng-scope" ng-show="expirationInDays > 0" tooltip="Expires in 55 days"></i>

			<span ng-show="expirationInDays < 0" className="label label-alert ng-hide">
				Expired
			</span>
</span>
                    </td>
                    <td>
                        <span title="ID: 69967" className="ng-binding">Orchestrator fb</span>
                    </td>
                    <td>
                        <span className="label label-default ng-binding ng-scope" ng-repeat="tag in file.tags" ng-click="searchByTag(tag)">
                                   table-export
                                </span>
                    </td>

                    <td className="actions">
                        <a tooltip="Copy file URL to clipboard." className="ng-scope">
                            <kb-copy-button copy-value="file.url" copy-message="File URL was copied into your clipboard!" className="ng-isolate-scope"><span ng-transclude="" className="kb-copy-button" title="" data-clipboard-text="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/263260894.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7d484ffb30312375c535a9c2280401731ca55e6a2ce36ecb827f3dea3932b94c" copy-message="File URL was copied into your clipboard!">
                                        <i className="fa fa-files-o action ng-scope"></i>
                                    </span></kb-copy-button>
                        </a>
                        <a href="https://s3.amazonaws.com/kbc-sapi-files/exp-30/2376/table-exports/in/c-keboola-ex-facebook-253350349/accounts/263260894.csv.gzmanifest?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&amp;X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJ2N244XSWYVVYVLQ%2F20170801%2Fus-east-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20170801T124633Z&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Expires=3600&amp;X-Amz-Signature=7d484ffb30312375c535a9c2280401731ca55e6a2ce36ecb827f3dea3932b94c" target="_blank" tooltip="" title="Download file" className="ng-scope">
                            <i className="fa fa-arrow-circle-o-down action"></i>
                        </a>
                        <a href="javascript:void(0)" kb-confirm="" message="Do you really want to delete file 263260911 (in.c-keboola-ex-facebook-253350349.accounts.csv.gz)?" confrim-type="danger" confirm-label="Delete" on-confirm="deleteFile(file.id)" header="Delete file" tooltip="Delete file" className="ng-scope">
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
    );
