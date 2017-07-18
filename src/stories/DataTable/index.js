import React from 'react';
import {storiesOf} from '@storybook/react';
import {Table, Column, Cell} from 'fixed-data-table';

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

storiesOf('DataTable')
    .addWithInfo(
        'default',
        'https://facebook.github.io/fixed-data-table/example-object-data.html',
        () => (
    <Table
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
    </Table>

        ),
        {
            inline: true,
        }
    )
;
