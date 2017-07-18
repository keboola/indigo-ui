import React from 'react';
import {storiesOf} from '@storybook/react';
import { ListGroup, ListGroupItem, Label } from 'react-bootstrap';


storiesOf('List')
    .addWithInfo(
        'simple',
        'Desc',
        () => (
            <ListGroup>
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>...</ListGroupItem>
            </ListGroup>
        ),
        {
            inline: true,
        }
    )
    .addWithInfo(
    'with status',
    'Desc',
    () => (
        <ListGroup>
            <ListGroupItem><Label bsStyle="default">1</Label>Item 1</ListGroupItem>
            <ListGroupItem><Label bsStyle="primary">2</Label>Item 2</ListGroupItem>
            <ListGroupItem><Label bsStyle="default">1</Label>...</ListGroupItem>
        </ListGroup>
    ),
    {
        inline: true,
    }
    )
    .addWithInfo(
        'big list with actions',
        'Desc',
        () => (
            <div >
                <div className="kbc-header">
                    <div className="kbc-title">
                        <h2 ><span className="kb-sapi-component-icon">
                            <img src="https://d1ycqiwapkz1gh.cloudfront.net/icons/dca-alook-analytics/32/1.png"
                                 width="32" height="32"/></span>
                            <a className="" href="/admin/projects/2390/applications/dca-alook-analytics">
                                aLook Analytics
                            </a>
                        </h2>
                    </div>
                </div>
                <div className="table table-hover">
                    <span className="tbody">
                        <a className="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301665">
                            <span className="td"><strong className="kbc-config-name">test</strong>
                                <div>
                                <small>test</small>
                                </div>
                            </span>
                        <span className="td text-right kbc-component-buttons">
                            <span className="kbc-component-author">
                                <span>Created by </span>
                                <strong>jan@keboola.com</strong>
                            </span>
                            <span>
                                <button className="btn btn-link">
                                    <i className="fa kbc-icon-cup"></i>
                                </button>
                            </span>
                            <button type="button" className="btn btn-link btn btn-default">
                            <i className="fa fa-fw fa-play"></i>
                            <span> 
                        </span>
                        </button>
                        </span>
                        </a>
                        <a className="tr" href="/admin/projects/2390/applications/dca-alook-analytics/296301686">
                            <span className="td">
                                <strong className="kbc-config-name">test2</strong>
                                <div>
                                    <small>test2</small>
                                </div>
                            </span>
                                <span className="td text-right kbc-component-buttons">
                                    <span className="kbc-component-author">
                                        <span>Created by </span>
                                        <strong>jan@keboola.com</strong>
                                    </span>
                                    <span>
                                        <button className="btn btn-link">
                                            <i className="fa kbc-icon-cup"></i>
                                        </button>
                                    </span>
                                    <button type="button" className="btn btn-link btn btn-default">
                                        <i className="fa fa-fw fa-play"></i>
                                    </button>
                            </span>
                        </a>
                    </span>
                </div>
            </div>
        ),
        {
            inline: true,
        }
    )
;
