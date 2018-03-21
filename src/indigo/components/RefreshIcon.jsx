import React from 'react';
import Loader from './Loader';

const RefreshIcon = React.createClass({
  propTypes: {
    isLoading: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      title: 'Refresh'
    };
  },

  render() {
    const { isLoading, title, ...remaining } = this.props;
    return (
      <span title={title}>
        {isLoading
          ? <Loader/>
          : <span {...remaining} className="kbc-refresh kbc-icon-cw" />}
      </span>
    );
  },
});

export default RefreshIcon;
