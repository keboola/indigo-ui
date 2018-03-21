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
    return (
      <span title={this.props.title}>
        {this.props.isLoading
          ? <Loader/>
          : <span {...this.props} className="kbc-refresh kbc-icon-cw" />}
      </span>
    );
  },
});

export default RefreshIcon;
