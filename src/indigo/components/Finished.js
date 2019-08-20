import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';

class Finished extends React.Component {
  render() {
    return (
      <span
        title={this.props.endTime ? moment(this.props.endTime).format('YYYY-MM-DD HH:mm:ss') : ''}
      >
        {!!this.props.showIcon && (
          <FontAwesomeIcon icon={faCalendar} className="icon-addon-right" />
        )}
        {this.props.endTime ? moment(this.props.endTime).fromNow() : 'N/A'}
      </span>
    );
  }
}

Finished.propTypes = {
  endTime: PropTypes.string,
  showIcon: PropTypes.bool,
};

Finished.defaultProps = {
  showIcon: false,
};

export default Finished;
