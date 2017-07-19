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
    );
