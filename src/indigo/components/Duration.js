import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { timeInWords, durationFrom } from './durationHelpers';

class Duration extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      endTime: moment()
        .format('YYYY-MM-DDTHH:mm:ssZZ')
        .toString(),
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
      endTime: moment()
        .format('YYYY-MM-DDTHH:mm:ssZZ')
        .toString(),
    });
  }

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
          {timeInWords(durationFrom(this.props.startTime, this.state.endTime), true)}
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
