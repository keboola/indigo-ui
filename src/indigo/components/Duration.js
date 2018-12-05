import React from 'react';
import PropTypes from 'prop-types';
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
          {this.props.showIcon && <i className="fa fa-clock-o duration-icon" />}
          {timeInWords(Math.round(this.props.duration))}
        </span>
      );
    }
    if (!this.props.endTime) {
      return (
        <span>
          {this.props.showIcon && <i className="fa fa-clock-o duration-icon" />}
          <DynamicDuration startTime={this.props.startTime} />
        </span>
      );
    }
    return (
      <span>
        {this.props.showIcon && <i className="fa fa-clock-o duration-icon" />}
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
