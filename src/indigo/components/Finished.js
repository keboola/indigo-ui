import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

class Finished extends React.Component {
  render() {
    return (
      <span
        title={
          this.props.endTime ? moment(this.props.endTime).format(this.props.dateTimeFormat) : ''
        }
      >
        {!!this.props.hasIcon && <i className="fa fa-calendar" />}
        {this.props.endTime ? moment(this.props.endTime).fromNow() : 'N/A'}
      </span>
    );
  }
}

Finished.propTypes = {
  endTime: PropTypes.string,
  dateTimeFormat: PropTypes.string,
  hasIcon: PropTypes.bool,
};

Finished.defaultProps = {
  dateTimeFormat: 'YYYY-MM-DD HH:mm:ss',
  hasIcon: false,
};

export default Finished;
