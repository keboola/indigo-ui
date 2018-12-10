import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import date from './date';

class CreatedWithIcon extends React.Component {
  render() {
    if (this.props.relative) {
      return (
        <span title={date.format(this.props.createdTime)}>
          <i className="fa fa-fw fa-calendar" /> {moment(this.props.createdTime).fromNow()}
        </span>
      );
    }
    return (
      <span title={moment(this.props.createdTime).fromNow()}>
        <i className="fa fa-fw fa-calendar" /> {date.format(this.props.createdTime)}
      </span>
    );
  }
}

CreatedWithIcon.propTypes = {
  createdTime: PropTypes.string.isRequired,
  relative: PropTypes.bool,
};

CreatedWithIcon.defaultProps = {
  relative: true,
};

export default CreatedWithIcon;
