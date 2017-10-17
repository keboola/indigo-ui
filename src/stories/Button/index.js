import React from 'react';
import {storiesOf} from '@storybook/react';
import {Button} from 'react-bootstrap';
import Icon from "../../static/common/Icon";

storiesOf('Button')
    .addWithInfo(
        'default',
        '',
        () => (
            <Button bsStyle="primary">
                Button
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button New',
        'Use case: click on "New button" will redirect you to a form where you configure new entity.',
        () => (
            <Button bsStyle="success">
                <i className="kbc-icon-plus"/>
                New [entity]
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button New small',
        'Use case: click on "New button" will redirect you to a form where you configure new entity.',
        () => (
            <Button bsStyle="success">
                <i className="kbc-icon-plus"/>
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Create',
        'Use case: click on "Create button" will create new entity from pre-filled values.',
        () => (
            <Button bsStyle="success">
                Create [entity]
            </Button>
        ),
        {
            inline: true,
        }
    )

    .addWithInfo(
        'KBC - Button only icon',
        'Desc',
        () => (
            <Button bsStyle="link">
                <i className="fa fa-fw fa-play"/>
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Show more',
        'Desc',
        () => (
            <Button bsStyle="btn-default">
                show more ...
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Authorize',
        'Desc',
        () => (
            <Button bsStyle="success">
                <i className="fa fa-fw fa-user"></i>
                <span>Authorize Account</span>
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Move to trash',
        'Desc',
        () => (
            <a >
                <span className="kbc-icon-cup fa fa-fw"></span>
                <span> Move to Trash</span>
            </a>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        'KBC - Button Delete',
        'Desc',
        () => (
            <Button type="button" bsStyle="danger">
                Remove [Entity]
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Edit button',
        'Desc',
        () => (
            <Button bsStyle="edit">
                <i className="fa fa-fw fa-pencil"/>
                Edit [entity]
            </Button>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
        '🆕 Edit button small',
        'Desc',
        () => (
            <Button bsStyle="link">
                <span className="fa fa-pencil"></span>
            </Button>
        ),
        {
            inline: true,
        }
    ).addWithInfo(
        'Button Festival',
        'Desc',
        () => (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        Status
                    </div>
                    <div className="col-md-3">
                        Icon 20x20 + Text
                    </div>
                    <div className="col-md-3">
                        Text
                    </div>
                    <div className="col-md-3">
                        Icon
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                            Normal
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success">
                            <i className="kbc-icon-plus"/>
                            <span className="btn-label">
                                New Extractor
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success">
                            <span className="btn-label">
                                New Extractor
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success">
                            <i className="kbc-icon-plus"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                            Active
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success" className="active">
                            <i className="kbc-icon-plus"/>
                            <span className="btn-label">
                                New Extractor
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success" className="active">
                            <span className="btn-label">
                                New Extractor
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success" className="active">
                            <i className="kbc-icon-plus"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                            Disabled
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success" disabled>
                            <i className="kbc-icon-plus"/>
                            <span className="btn-label">
                                New Extractor
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success" disabled>
                            <span className="btn-label">
                                New Extractor
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="success" disabled>
                            <i className="kbc-icon-plus"/>
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <br/><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Normal
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary">
                            <i className="kbc-icon-plus"/>
                            <span className="btn-label">
                                Add Input
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary">
                            <span className="btn-label">
                                Add Input
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary">
                            <i className="kbc-icon-plus"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Active
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" className="active">
                            <i className="kbc-icon-plus"/>
                            <span className="btn-label">
                                Add Input
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" className="active">
                            <span className="btn-label">
                                Add Input
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" className="active">
                            <i className="kbc-icon-plus"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Disabled
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" disabled>
                            <i className="kbc-icon-plus"/>
                            <span className="btn-label">
                                Add Input
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" disabled>
                            <span className="btn-label">
                                Add Input
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" disabled>
                            <i className="kbc-icon-plus"/>
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <br/><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Normal
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="danger">
                            <i className="fa fa-trash"/>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="danger">
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="danger">
                            <i className="fa fa-trash"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Active
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="danger" className="active">
                            <i className="fa fa-trash"/>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="danger" className="active">
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="danger" className="active">
                            <i className="fa fa-trash"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Disabled
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" disabled>
                            <i className="fa fa-trash"/>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" disabled>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="primary" disabled>
                            <i className="fa fa-trash"/>
                        </Button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <br/><br/><br/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Normal
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link">
                            <i className="fa fa-trash"/>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link">
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link">
                            <i className="fa fa-trash"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Active
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link" className="active">
                            <i className="fa fa-trash"/>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link" className="active">
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link" className="active">
                            <i className="fa fa-trash"/>
                        </Button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        Disabled
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link" disabled>
                            <i className="fa fa-trash"/>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link" disabled>
                            <span className="btn-label">
                                Delete Project
                            </span>
                        </Button>
                    </div>
                    <div className="col-md-3">
                        <Button bsStyle="link" disabled>
                            <i className="fa fa-trash"/>
                        </Button>
                    </div>
                </div>
            </div>

        ),
        {
            inline: true,
        }
    );