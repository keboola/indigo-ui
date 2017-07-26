import React from 'react';
import date from '../../static/helpers/date.js';

export default React.createClass({
  displayName: 'CreatedWithIcon',

  propTypes: {
    createdTime: React.PropTypes.string
  },

  render: function() {
    return (
      <span>
          <i className="fa fa-fw fa-calendar" />
          {date.format(this.props.createdTime)}
      </span>
    );
  }
});
