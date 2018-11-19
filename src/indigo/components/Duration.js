import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Duration extends React.Component {
  render() {
    if (!this.props.startTime) {
      return null;
    }

    if (!this.props.endTime) {
      return (
        <span>
          aaa
          {moment(this.props.startTime - this.props.endTime).fromNow(true)}
        </span>
      );
      // <DynamicDuration startTime={this.props.startTime} />;
    }

    return null;

    // return <StaticDuration startTime={this.props.startTime} endTime={this.props.endTime}/>;
  }
}

Duration.propTypes = {
  startTime: PropTypes.string,
  endTime: PropTypes.string,
};

export default Duration;
