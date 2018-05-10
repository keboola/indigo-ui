import React from 'react';
import PropTypes from 'prop-types';

const Check = React.createClass({
  propTypes: {
    isChecked: PropTypes.bool.isRequired
  },

  render() {
    return (
      <i className={this.props.isChecked ? 'fa fa-fw fa-check' : 'fa fa-fw fa-times'}/>
    );
  }
});

export default Check;
