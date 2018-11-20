import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class Finished extends React.Component {
  render() {
    return (
      <span
        title={this.props.endTime ? moment(this.props.endTime).format('YYYY-MM-DD HH:mm:ss') : ''}
      >
        {!!this.props.hasIcon && <i className="fa fa-calendar finished-icon" />}
        {this.props.endTime ? moment(this.props.endTime).fromNow() : 'N/A'}
      </span>
    );
  }
}

Finished.propTypes = {
  endTime: PropTypes.string,
  hasIcon: PropTypes.bool,
};

Finished.defaultProps = {
  hasIcon: false,
};

export default Finished;
