import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';

class Protected extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProtected: true
    };
  }

  render() {
    if (this.state.isProtected) {
      return this.renderProtected();
    }

    return this.props.children;
  }

  renderProtected() {
    return (
      <span title="Protected content, click to reveal">
        <FontAwesomeIcon
          icon={faLock}
          fixedWidth
          className={classnames('icon-clickable', this.props.className)}
          onClick={() => this.setState({ isProtected: false })}
        />
      </span>
    );
  }
}

Protected.propTypes = {
  children: PropTypes.any,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default Protected;
