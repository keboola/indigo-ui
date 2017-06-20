import React from 'react';
import PropTypes from 'prop-types'

const Test = ({ text }) => {
  return (
    <div>{text}</div>
  );
};

Test.propTypes = {
  text: PropTypes.string.isRequired
};

export default Test;
