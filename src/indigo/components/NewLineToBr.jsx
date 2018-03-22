import React, { PropTypes } from 'react';

export default React.createClass({
  propTypes: {
    text: PropTypes.string.isRequired
  },

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
  },
});
