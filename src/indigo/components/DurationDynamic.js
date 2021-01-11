import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { timeInWords, durationFrom } from './durationHelpers';

class DurationDynamic extends React.Component {
  constructor(props) {
    super(props);
    this.tick = this.tick.bind(this);
    this.state = {
      endTime: moment().format()
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
      endTime: moment().format()
    });
  }

  render() {
    return <span>{timeInWords(durationFrom(this.props.startTime, this.state.endTime))}</span>;
  }
}

DurationDynamic.propTypes = {
  startTime: PropTypes.string
};

export default DurationDynamic;
