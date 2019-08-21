import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';

class Loader extends React.Component {
  render() {
    return (
      <FontAwesomeIcon
        spin
        icon={faSpinner}
        fixedWidth
        className={classnames(this.props.className)}
      />
    );
  }
}

Loader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Loader;
