import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync';
import Loader from './Loader';

class RefreshIcon extends React.Component {
  render() {
    const { isLoading, title, ...remaining } = this.props;

    return (
      <span title={title}>
        {isLoading ? (
          <Loader />
        ) : (
          <FontAwesomeIcon icon={faSync} fixedWidth className="icon-clickable" {...remaining} />
        )}
      </span>
    );
  }
}

RefreshIcon.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

RefreshIcon.defaultProps = {
  title: 'Refresh',
};

export default RefreshIcon;
