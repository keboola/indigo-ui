import React from 'react';
import classNames from 'classnames';

export default React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  render() {
    return (
      <span className={classNames('fa fa-spin fa-spinner', this.props.className)}/>
    );
  }

});