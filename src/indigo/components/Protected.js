import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

class Protected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProtected: true,
    };
  }

  render() {
    if (this.state.isProtected) {
      return this.renderProtected();
    }

    return <span>{this.props.children}</span>;
  }

  renderProtected() {
    return (
      <span title="Protected content, click to reveal">
        <FontAwesomeIcon
          icon={faLock}
          className="icon-fixed-width icon-clickable"
          onClick={() => this.setState({ isProtected: false })}
        />
      </span>
    );
  }
}

Protected.propTypes = {
  children: PropTypes.any,
};

export default Protected;
