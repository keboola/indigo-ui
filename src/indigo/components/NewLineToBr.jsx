import React from 'react';
import PropTypes from 'prop-types';

class NewLineToBr extends React.Component {
  render() {
    const lines = this.props.text.split('\n');
    let result = [];

    lines.forEach((value, index) => {
      result.push(<span key={index}>{value}</span>);
      if (index < lines.length - 1) {
        result.push(<br key={index + '-br'} />);
      }
    });

    return (
      <span>{result}</span>
    );
  }
}

NewLineToBr.propTypes = {
  text: PropTypes.string.isRequired
};

export default NewLineToBr;
