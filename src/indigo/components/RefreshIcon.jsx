import React from 'react';
import Loader from './Loader';

const LEFT = 'left', RIGHT = 'right';

const RefreshIcon = React.createClass({
  propTypes: {
    isLoading: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string,
    loaderPosition: React.PropTypes.oneOf([LEFT, RIGHT])
  },

  getDefaultProps() {
    return {
      title: 'Refresh',
      loaderPosition: RIGHT
    };
  },

  render() {
    return (
      <span title={this.props.title}>
          {this.props.isLoading ? this.loader() : this.refreshIcon()}
        </span>
    );
  },

  loader() {
    return (
      <Loader/>
    );
  },

  refreshIcon() {
    return (
      <span {...this.props} className="kbc-refresh kbc-icon-cw"></span>
    );
  }

});

export default RefreshIcon;
