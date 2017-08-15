import React from 'react';
import {Button, Accordion, Panel} from 'react-bootstrap';

export default React.createClass({
    displayName: 'Collapsible',
    propTypes: {
        content: React.PropTypes.string,
        headerContent: React.PropTypes.string,
        headerStatus: React.PropTypes.string,
        headerActions: React.PropTypes.string,
        headerSize: React.PropTypes.string,
    },
    render: function () {
        return (
            <Accordion className="collapsible">
                <Panel className={this.getSizeClass()}
                       header={this.getCollapsibleHeader()}
                       eventKey="1">
                    {this.props.content}
                </Panel>
            </Accordion>
        );
    },
    getCollapsibleHeader: function () {
        return (
            <div>
                <div className="panel-heading-content">
                    {this.props.headerContent}
                </div>
                <div className="panel-heading-additional">
                    <div className="panel-heading-status">
                        {this.props.headerStatus}
                    </div>

                    <div className="panel-heading-actions">
                        {this.props.headerActions}
                    </div>
                </div>
            </div>
        )
    },
    getSizeClass: function () {
        return this.props.headerSize ? 'panel-' + this.props.headerSize : ''
    }
});