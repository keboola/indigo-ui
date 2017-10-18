import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';
import Icon from "../../static/common/Icon";


storiesOf('Button')
    .addWithInfo(
        'Button types',
        () => (
            <div>
                <Button bsStyle="success">
                    <span className="btn-label">
                        .btn-success
                    </span>
                </Button>

                <br/>

                <Button bsStyle="primary">
                    <span className="btn-label">
                        .btn-primary
                    </span>
                </Button>

                <br/>

                <Button bsStyle="danger">
                    <span className="btn-label">
                        .btn-danger
                    </span>
                </Button>

                <br/>

                <Button bsStyle="warning">
                    <span className="btn-label">
                        .btn-warning
                    </span>
                </Button>

                <br/>

                <Button bsStyle="link">
                    <span className="btn-label">
                        .btn-label
                    </span>
                </Button>
            </div>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'Button sizing',
        () => (
            <div>
                <Button bsStyle="primary">
                    <Icon iconClass="plus"/>
                    <span className="btn-label">
                        Size .btn
                    </span>
                </Button>

                <br/>

                <Button bsStyle="primary" className="btn-sm">
                    <Icon iconClass="plus"/>
                    <span className="btn-label">
                        Size .btn-sm
                    </span>
                </Button>

                <br/>

                <Button bsStyle="success">
                    <Icon iconClass="plus"/>
                    <span className="btn-label">
                        Icon & Label
                    </span>
                </Button>

                <br/>

                <Button bsStyle="success">
                    <span className="btn-label">
                        Label only
                    </span>
                </Button>

                <br/>

                <Button bsStyle="success">
                    <Icon iconClass="plus"/>
                </Button>

                <br/>

                <Button bsStyle="danger" className="btn-responsive">
                    <Icon iconClass="plus"/>
                    <span className="btn-label">
                        Button responsive
                    </span>
                </Button>
            </div>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'Button Actions',
        'Desc',
        () => (
            <div>

                <Button bsStyle="new">
                    <Icon iconClass="plus"/>
                    <span className="btn-label">
                                New [entity]
                    </span>
                </Button>

                <br/>

                <Button bsStyle="new">
                    <span className="btn-label">
                                Create [entity]
                    </span>
                </Button>

                <br/>

                <Button bsStyle="edit">
                    <Icon iconClass="edit"/>
                    <span className="btn-label">
                                Edit [entity]
                    </span>
                </Button>

                <br/>

                <Button bsStyle="edit">
                    <span className="btn-label">
                                Save [entity]
                    </span>
                </Button>

                <br/>

                <Button bsStyle="delete">
                    <Icon iconClass="trash"/>
                    <span className="btn-label">
                                Move to Trash
                    </span>
                </Button>

                <br/>

                <Button bsStyle="delete">
                    <span className="btn-label">
                                Delete [entity]
                    </span>
                </Button>

                <br/>

                <Button bsStyle="success">
                    <Icon iconClass="user"/>
                    <span className="btn-label">
                                Authorize
                    </span>
                </Button>

                <br/>

                <Button bsStyle="run">
                    <Icon iconClass="run"/>
                    <span className="btn-label">
                                Run Transformation
                    </span>
                </Button>

                <br/>

                <Button bsStyle="link">
                    <span className="btn-label">
                                Show more ...
                    </span>
                </Button>

                <br/>

                <Button bsStyle="primary">
                    <Icon iconClass="copy"/>
                    <span className="btn-label">
                                Copy to Clipboard
                    </span>
                </Button>

            </div>

        ),
        {
            inline: true,
        }
    );