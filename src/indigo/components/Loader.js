import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

class Loader extends React.Component {
  render() {
    return (
      <FontAwesomeIcon
        spin
        icon={faSpinner}
        className={classNames('icon-fixed-width', this.props.className)}
      />
    );
  }
}

Loader.propTypes = {
  className: PropTypes.string,
};

export default Loader;
