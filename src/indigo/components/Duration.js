import React from 'react';
import PropTypes from 'prop-types';

export const durationFrom = (started, finished) => {
  const duration = (new Date(finished).getTime() - new Date(started).getTime()) / 1000;
  return duration;
};

export const timeInWords = (duration, round) => {
  const days = Math.floor(duration / 86400);
  const hours = Math.floor((duration % 86400) / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;
  if (days > 0) {
    return 'more than 24 hrs';
  }
  if (duration === 0) {
    return '0 sec';
  }
  const result = [];
  if (hours === 1) {
    result.push(`${hours} hr`);
  }
  if (hours > 1) {
    result.push(`${hours} hrs`);
  }
  if (minutes > 0) {
    result.push(`${minutes} min`);
  }
  if (seconds > 0 && (!round || hours === 0)) {
    result.push(`${seconds} sec`);
  }
  if (result.length > 0) {
    return result.join(' ');
  }
  return '';
};

class Duration extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      endTime: new Date().toString(),
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      endTime: new Date().toString(),
    });
  }

  render() {
    if (!this.props.endTime) {
      return (
        <span>
          {!!this.props.showIcon && <i className="fa fa-clock-o duration-icon" />}
          {timeInWords(durationFrom(this.props.startTime, this.state.endTime), true)}
        </span>
      );
    }

    return (
      <span>
        {!!this.props.showIcon && <i className="fa fa-clock-o duration-icon" />}
        {timeInWords(durationFrom(this.props.startTime, this.props.endTime), true)}
      </span>
    );
  }
}

Duration.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
  showIcon: PropTypes.bool,
};

Duration.defaultProps = {
  showIcon: false,
};

export default Duration;
