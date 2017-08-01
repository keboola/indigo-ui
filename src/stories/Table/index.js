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
                    <div className="tr"><span className="th"><strong >Name</strong></span><span className="th"><strong >Last Run</strong></span><span
                        className="th"><strong >Duration</strong></span><span className="th"><strong >Schedule</strong></span><span
                        className="th"></span></div>
                </div>
                <div className="tbody"><a className="tr" href="/admin/projects/2376/orchestrations/254478952"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span > </span><span >booooou</span></span><span
                    className="td"><span title="2017-08-01 05:38:02"><i
                    className="fa fa-calendar"></i><span > </span><span
                    title="2017-08-01 05:38:02">7 hours ago</span></span></span><span className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >1 sec</span></span></span><span
                    className="td"><span ><span ><span >Every 0, 4, 9, 17, 30 and 38th minute past the 0 and 3rd hour</span><span > (UTC) </span></span></span></span><span
                    className="td text-right kbc-no-wrap"><span ><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript ></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span ><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/263622569"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span > </span><span >Hrozna orchestrace</span></span><span
                    className="td"><span title="2017-07-20 14:19:59"><i
                    className="fa fa-calendar"></i><span > </span><span
                    title="2017-07-20 14:19:59">12 days ago</span></span></span><span className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >22 sec</span></span></span><span className="td"><span >No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span ><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript ></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span ><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/254035890"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span > </span><span >nevym</span></span><span
                    className="td"><span title="2017-07-04 02:00:29"><i
                    className="fa fa-calendar"></i><span > </span><span
                    title="2017-07-04 02:00:29">a month ago</span></span></span><span className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >4 min 33 sec</span></span></span><span
                    className="td"><span ><span ><span >00:00 on the 3 and 4th of every month</span><span > (UTC) </span></span></span></span><span
                    className="td text-right kbc-no-wrap"><span ><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript ></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span ><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/258978343"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span > </span><span >GDW orchestrace</span></span><span
                    className="td"><span title="2017-05-17 12:52:30"><i
                    className="fa fa-calendar"></i><span > </span><span title="2017-05-17 12:52:30">2 months ago</span></span></span><span
                    className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >35 sec</span></span></span><span className="td"><span >No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span ><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript ></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span ><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/253397080"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span > </span><span >fb</span></span><span
                    className="td"><span title="2017-05-05 00:18:54"><i
                    className="fa fa-calendar"></i><span > </span><span title="2017-05-05 00:18:54">3 months ago</span></span></span><span
                    className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >51 sec</span></span></span><span className="td"><span >No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span ><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript ></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span ><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/253777920"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span > </span><span >Dat Or</span></span><span
                    className="td"><span title="2017-04-26 16:37:06"><i
                    className="fa fa-calendar"></i><span > </span><span title="2017-04-26 16:37:06">3 months ago</span></span></span><span
                    className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >32 sec</span></span></span><span className="td"><span >No Schedule</span></span><span
                    className="td text-right kbc-no-wrap"><span ><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript ></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-check"></i></button><span ><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/254034676"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span > </span><span >test it</span></span><span
                    className="td"><span title="2017-04-06 14:11:11"><i
                    className="fa fa-calendar"></i><span > </span><span title="2017-04-06 14:11:11">4 months ago</span></span></span><span
                    className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >8 sec</span></span></span><span
                    className="td"><span ><span ><span >00:00, 00:15, 15:00 and 15:15 on Mon</span><span > (UTC) </span></span></span></span><span
                    className="td text-right kbc-no-wrap"><span ><button className="btn btn-link"><i
                    className="kbc-icon-cup"></i></button><noscript ></noscript></span><button className="btn btn-link"><i
                    className="fa fa-fw fa-times"></i></button><span ><button type="button" className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/253051623"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/e99009ece7097fad83478d0f738fce60.svg"/><span > </span><span >hjhj</span></span><span
                    className="td"><span title="2017-04-03 13:04:27"><i
                    className="fa fa-calendar"></i><span > </span><span title="2017-04-03 13:04:27">4 months ago</span></span></span><span
                    className="td"><span ><i
                    className="fa fa-clock-o"></i><span > </span><span >8 sec</span></span></span><span
                    className="td"><span >No Schedule</span></span><span className="td text-right kbc-no-wrap"><span ><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript ></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span ><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/254491600"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span > </span><span >123</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span >No Schedule</span></span><span className="td text-right kbc-no-wrap"><span ><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript ></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span ><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/301226688"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span > </span><span >dfsdfs</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span >No Schedule</span></span><span className="td text-right kbc-no-wrap"><span ><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript ></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span ><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/263293442"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span > </span><span >prazdna</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span >No Schedule</span></span><span className="td text-right kbc-no-wrap"><span ><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript ></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span ><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a><a className="tr"
                                                                                                         href="/admin/projects/2376/orchestrations/256532766"><span
                    className="td"><img
                    src="https://d38qy9k7n8xp7k.cloudfront.net/kbc/0.2.7-36-g8c7164e/b1d8b9aeb9f12d4005f655f74d87c726.svg"/><span > </span><span >qwrqereqw</span></span><span
                    className="td"></span><span className="td">No run yet</span><span
                    className="td"><span >No Schedule</span></span><span className="td text-right kbc-no-wrap"><span ><button
                    className="btn btn-link"><i className="kbc-icon-cup"></i></button><noscript ></noscript></span><button
                    className="btn btn-link"><i className="fa fa-fw fa-check"></i></button><span ><button type="button"
                                                                                                          className="btn btn-link"><i
                    className="fa fa-fw fa-play"></i></button><noscript ></noscript></span></span></a></div>
            </div>
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
            <div className="table table-striped table-hover" >
                <div className="thead" >
                    <div className="tr" ><span className="th"
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
                <div className="tbody" ><a className="tr"
                                                                      href="/admin/projects/2376/jobs/303308705?q="
                                                                      >
                    <div className="td" >303308705</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 05:38:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303303689?q="
                       >
                    <div className="td" >303303689</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 05:30:05</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303292219?q="
                       >
                    <div className="td" >303292219</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 05:17:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303288979?q="
                       >
                    <div className="td" >303288979</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 05:09:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303286014?q="
                       >
                    <div className="td" >303286014</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 05:04:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303283263?q="
                       >
                    <div className="td" >303283263</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 05:00:15</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303195285?q="
                       >
                    <div className="td" >303195285</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 02:38:03</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303190299?q="
                       >
                    <div className="td" >303190299</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 02:30:04</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303178794?q="
                       >
                    <div className="td" >303178794</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 02:17:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303172465?q="
                       >
                    <div className="td" >303172465</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 02:04:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/303170571?q="
                       >
                    <div className="td" >303170571</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-08-01 02:00:26</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302873517?q="
                       >
                    <div className="td" >302873517</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 05:38:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302868705?q="
                       >
                    <div className="td" >302868705</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 05:30:04</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302856208?q="
                       >
                    <div className="td" >302856208</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 05:17:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302853238?q="
                       >
                    <div className="td" >302853238</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 05:09:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302850366?q="
                       >
                    <div className="td" >302850366</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 05:04:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302847685?q="
                       >
                    <div className="td" >302847685</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 05:00:15</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302761229?q="
                       >
                    <div className="td" >302761229</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 02:38:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302756448?q="
                       >
                    <div className="td" >302756448</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 02:30:05</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302744117?q="
                       >
                    <div className="td" >302744117</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 02:17:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302738777?q="
                       >
                    <div className="td" >302738777</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 02:09:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302736342?q="
                       >
                    <div className="td" >302736342</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 02:04:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302734875?q="
                       >
                    <div className="td" >302734875</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-31 02:00:31</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302420739?q="
                       >
                    <div className="td" >302420739</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 05:38:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302419949?q="
                       >
                    <div className="td" >302419949</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 05:30:04</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302414880?q="
                       >
                    <div className="td" >302414880</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 05:17:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302413861?q="
                       >
                    <div className="td" >302413861</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 05:09:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302413095?q="
                       >
                    <div className="td" >302413095</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 05:04:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302411550?q="
                       >
                    <div className="td" >302411550</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 05:00:14</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302379419?q="
                       >
                    <div className="td" >302379419</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 02:38:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302378189?q="
                       >
                    <div className="td" >302378189</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 02:30:04</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302370918?q="
                       >
                    <div className="td" >302370918</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 02:17:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302367547?q="
                       >
                    <div className="td" >302367547</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 02:09:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302365272?q="
                       >
                    <div className="td" >302365272</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 02:04:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302362638?q="
                       >
                    <div className="td" >302362638</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-30 02:00:32</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302127801?q="
                       >
                    <div className="td" >302127801</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 05:38:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302126734?q="
                       >
                    <div className="td" >302126734</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 05:30:04</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302121702?q="
                       >
                    <div className="td" >302121702</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 05:17:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302120528?q="
                       >
                    <div className="td" >302120528</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 05:09:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302119629?q="
                       >
                    <div className="td" >302119629</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 05:04:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302118103?q="
                       >
                    <div className="td" >302118103</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 05:00:13</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302088569?q="
                       >
                    <div className="td" >302088569</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 02:38:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302087752?q="
                       >
                    <div className="td" >302087752</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 02:30:06</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302082326?q="
                       >
                    <div className="td" >302082326</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 02:17:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302076818?q="
                       >
                    <div className="td" >302076818</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 02:04:02</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/302074584?q="
                       >
                    <div className="td" >302074584</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-29 02:00:28</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301800774?q="
                       >
                    <div className="td" >301800774</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-28 05:38:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301798990?q="
                       >
                    <div className="td" >301798990</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-28 05:30:05</div>
                    <div className="td" ><span
                        >1 sec</span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301792422?q="
                       >
                    <div className="td" >301792422</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-28 05:17:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a><a className="tr" href="/admin/projects/2376/jobs/301791430?q="
                       >
                    <div className="td" >301791430</div>
                    <div className="td" ><span
                        className="label label-danger"
                        >error</span></div>
                    <div className="td" ><span
                        className="kb-sapi-component-icon" ><img
                        src="https://d1ycqiwapkz1gh.cloudfront.net/icons/orchestrator/32/1.png" width="32" height="32"/></span><span
                        > </span><span
                        ><span
                        >Orchestrator</span><span
                        > </span></span></div>
                    <div className="td" ><span
                        >booooou</span></div>
                    <div className="td" >run</div>
                    <div className="td" >Orchestrator booooou</div>
                    <div className="td" >2017-07-28 05:09:02</div>
                    <div className="td" ><span
                        ></span></div>
                </a></div>
            </div>
        ),
        {
            inline: true,
        }
    );
