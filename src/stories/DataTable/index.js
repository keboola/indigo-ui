import React from 'react';
import {storiesOf} from '@storybook/react';
// import { Table } from 'react-bootstrap';
// import ReactDOM from 'react-dom';
import {Table, Column, Cell} from 'fixed-data-table';

const rows = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    // .... and more
];

storiesOf('DataTable')
    .addWithInfo(
        'default',
        'Desc',
        () => (
    <Table
        rowHeight={50}
        rowsCount={rows.length}
        width={500}
        height={500}
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
    </Table>

        ),
        {
            inline: true,
        }
    )
;
