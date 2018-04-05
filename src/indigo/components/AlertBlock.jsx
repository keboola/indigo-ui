import React from 'react';
import {
    Alert
} from 'react-bootstrap';

const AlertBlock = React.createClass({
    propTypes: {
        title: React.PropTypes.bool.isRequired,
        style: React.PropTypes.bool.isRequired,
        closable: React.PropTypes.bool,
        children: React.PropTypes.any
    },

    render() {
        return (
            <Alert className="alert-block" bsStyle={this.props.style}>
                <h3 className="alert-block-title">{this.props.title}</h3>
                <div className="alert-block-body">
                    {this.props.children}
                </div>
            </Alert>
        );
    }
});

export default AlertBlock;
