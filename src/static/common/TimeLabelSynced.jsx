import React from 'react';
import date from '../utils/date.js';

export default React.createClass({
    displayName: 'TimeLabelSynced',
    propTypes: {
        createdTime: React.PropTypes.string
    },
    render: function () {
        return (
            <span className="time-label time-label-synced" title={"synced " + date.fromNow(this.props.createdTime)}>
                <i className="fa fa-fw fa-refresh"/>
                {date.fromNow(this.props.createdTime)}
            </span>
        );
    }
});