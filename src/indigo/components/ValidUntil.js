import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import date from './date';

class ValidUntil extends React.Component {
  render() {
    if (this.props.validUntil) {
      return <span>N/A</span>;
    }
    return (
      <span title={date.format(this.props.validUntil)}>
        {this.props.showIcon && <i className="fa fa-clock-o duration-icon" />}
        {this.props.validUntil < moment.now()
          ? moment(this.props.validUntil).fromNow()
          : 'any time now'}
      </span>
    );
  }
}

ValidUntil.propTypes = {
  validUntil: PropTypes.number,
  showIcon: PropTypes.bool,
};

ValidUntil.defaultProps = {
  showIcon: false,
};

export default ValidUntil;
