import React from 'react';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import Protected from '../Protected';

const concealedKeys = ['password'];

class TreeNode extends React.Component {
  render() {
    return <ul>{this.props.data.map(this.renderRow, this).valueSeq()}</ul>;
  }

  renderRow(value, key) {
    return (
      <li key={key}>
        {Immutable.Iterable.isIterable(value)
          ? this.renderNode(value, key)
          : this.renderLeaf(value, key)}
      </li>
    );
  }

  renderNode(value, key) {
    return (
      <span>
        <strong>{key}</strong>
        <TreeNode data={value} />
      </span>
    );
  }

  renderValue(value, key) {
    if (concealedKeys.indexOf(key) >= 0) {
      return <Protected>{String(value)}</Protected>;
    }
    return String(value);
  }

  renderLeaf(value, key) {
    return (
      <span>
        <strong>{key}</strong>: {this.renderValue(value, key)}
      </span>
    );
  }
}

TreeNode.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TreeNode;
