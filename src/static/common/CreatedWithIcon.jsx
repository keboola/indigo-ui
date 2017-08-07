import React from 'react';
import date from '../utils/date.js';

export default React.createClass({
  displayName: 'CreatedWithIcon',
  propTypes: {
    createdTime: React.PropTypes.string
  },
  render: function() {
    return (
      <span className="time-label time-label-created" title={date.fromNow(this.props.createdTime)}>
          <i className="fa fa-fw fa-calendar" />
          {date.format(this.props.createdTime)}
      </span>
    );
  }
});