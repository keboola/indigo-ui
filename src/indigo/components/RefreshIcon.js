import React from 'react';
import PropTypes from 'prop-types';

import Loader from './Loader';

class RefreshIcon extends React.Component {
  render() {
    const { isLoading, title, ...remaining } = this.props;
    return (
      <span title={title}>
        {isLoading ? (
          <Loader />
        ) : (
          <span {...remaining} className="kbc-refresh fa fa-fw fa-refresh" />
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
