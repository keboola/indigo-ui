import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default React.createClass({
  propTypes: {
    className: PropTypes.string
  },

  render() {
    return (
      <span className={classNames('fa fa-spin fa-spinner', this.props.className)}/>
    );
  }

});
