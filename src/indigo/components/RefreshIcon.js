import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync';
import Loader from './Loader';

class RefreshIcon extends React.Component {
  render() {
    const { isLoading, title, ...remaining } = this.props;

    return (
      <span title={title}>
        {isLoading ? (
          <Loader className={classnames(this.props.className)} />
        ) : (
          <FontAwesomeIcon
            icon={faSync}
            fixedWidth
            className={classnames('icon-clickable', this.props.className)}
            {...remaining}
          />
        )}
      </span>
    );
  }
}

RefreshIcon.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

RefreshIcon.defaultProps = {
  title: 'Refresh'
};

export default RefreshIcon;
