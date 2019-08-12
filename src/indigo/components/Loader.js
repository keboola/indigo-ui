import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Loader extends React.Component {
  render() {
    return <i className={classNames('fa fa-fw fa-spin fa-spinner', this.props.className)} />;
  }
}

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
