import React from 'react';
import {storiesOf} from '@storybook/react';
import {Table, Button} from 'react-bootstrap';


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
;
