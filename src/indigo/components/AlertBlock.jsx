import React from 'react';
import {
    Alert
} from 'react-bootstrap';

const AlertBlock = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired,
        style: React.PropTypes.string.isRequired,
        children: React.PropTypes.any.isRequired
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
