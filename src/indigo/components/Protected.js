import React from 'react';
import PropTypes from 'prop-types';

class Protected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProtected: true,
    };
  }

  render() {
    return this.state.isProtected ? this.renderProtected() : this.renderRevealed();
  }

  renderProtected() {
    return (
      <span
        className="fa fa-fw fa-lock kbc-protected"
        title="Protected content, click to reveal"
        onClick={() => {
          this.setState({
            isProtected: false,
          });
        }}
      />
    );
  }

  renderRevealed() {
    return <span>{this.props.children}</span>;
  }
}

Protected.propTypes = {
  children: PropTypes.any,
};

export default Protected;
