import React from 'react';
import PropTypes from 'prop-types';

class Check extends React.Component {
  render() {
    return <i className={this.props.isChecked ? 'fa fa-fw fa-check' : 'fa fa-fw fa-times'} />;
  }
}

Check.propTypes = {
  isChecked: PropTypes.bool.isRequired,
};

export default Check;
