import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {
    Table,
    Tab,
    Tabs,
    Modal
} from 'react-bootstrap';


storiesOf('[CSS] Tabs', module)
    .add(
        'Tabs',
        withInfo({
            text: `
            Basic usage of tabs with custom styles
        `,
            inline: true,
        })(() => {
            return (
                <Tabs id="basic tabs" defaultActiveKey={2}>
                    <Tab eventKey={1} title="Tab 1">
                        Tab 1 content
                    </Tab>
                    <Tab eventKey={2} title="Tab 2">
                        Tab 2 content
                    </Tab>
                </Tabs>
            );
        })
    )
    .add(
        'Tabs with no padding',
        withInfo({
            text: `
        Serves for table content inside Tab. Add '.tab-pane-no-padding' on <Tab> element. So you can remove padding per tab.
        `,
            inline: true,
        })(() => {
            return (
                <Tabs id="tabs-no-padding" defaultActiveKey={1}>
                    <Tab className="tab-pane-no-padding" eventKey={1} title="Table content">
                        <Table striped bordered condensed hover>
                            <thead>
                            <tr>
                                <th>aaa</th>
                                <th>bbb</th>
                                <th>ccc</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>111</td>
                                <td>111</td>
                                <td>111</td>
                            </tr>
                            <tr>
                                <td>222</td>
                                <td>222</td>
                                <td>222</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Tab>

                    <Tab eventKey={2} title="Normal content">
                        Second Tab with default padding
                    </Tab>
                </Tabs>
            );
        })
    )
    .add(
        'Tabs inside modal',
        withInfo({
            text: `
         Serves for Tabs used inside in modal. Adjusts spacing to fit Tabs. Add '.tabs-inside-modal' on <Tabs> element.
        `,
            inline: true,
        })(() => {
            return (
                <div className="bs-example">
                    <div className="static-modal" style={{position: 'relative'}}>
                        <Modal.Dialog>
                            <Modal.Header>
                                <Modal.Title>Modal with Tabs</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Tabs id="modal-with-tabs" className="tabs-inside-modal" defaultActiveKey={1}>
                                <Tab eventKey={1} title="Tab 1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur excepturi neque quisquam ratione tempore!
                                </Tab>
                                <Tab eventKey={2} title="Tab 1">
                                    Ab aliquam architecto eos et laboriosam libero molestiae qui quisquam rerum vero. Accusamus, quibusdam, voluptates.
                                </Tab>
                            </Tabs>
                            </Modal.Body>
                        </Modal.Dialog>
                    </div>
                </div>
            );
        })
    );
