import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons/faClock';
import { timeInWords, durationFrom } from './durationHelpers';
import DynamicDuration from './DurationDynamic';

class Duration extends React.Component {
  render() {
    if (!this.props.startTime && !this.props.duration) {
      return <span>N/A</span>;
    }
    if (this.props.duration) {
      return (
        <span>
          {this.props.showIcon && <FontAwesomeIcon icon={faClock} className="icon-addon-right" />}
          {timeInWords(Math.round(this.props.duration))}
        </span>
      );
    }
    if (!this.props.endTime) {
      return (
        <span>
          {this.props.showIcon && <FontAwesomeIcon icon={faClock} className="icon-addon-right" />}
          <DynamicDuration startTime={this.props.startTime} />
        </span>
      );
    }
    return (
      <span>
        {this.props.showIcon && <FontAwesomeIcon icon={faClock} className="icon-addon-right" />}
        {timeInWords(durationFrom(this.props.startTime, this.props.endTime), true)}
      </span>
    );
  }
}

Duration.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  duration: PropTypes.number,
  showIcon: PropTypes.bool,
};

Duration.defaultProps = {
  showIcon: false,
};

export default Duration;
