import React from 'react';
import PropTypes from 'prop-types';
import dayjs from './date';
import { timeInWords, durationFrom } from './durationHelpers';

class DurationDynamic extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      endTime: dayjs().format(),
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
      endTime: dayjs().format(),
    });
  }

  render() {
    return <span>{timeInWords(durationFrom(this.props.startTime, this.state.endTime))}</span>;
  }
}

DurationDynamic.propTypes = {
  startTime: PropTypes.string,
};

export default DurationDynamic;
