import React from 'react';
import Immutable from 'immutable';
import Protected from '../Protected';

const TreeNode = React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired
  },

  concealedKeys: ["password"],

  render() {
    return (
        <ul>
          {this.props.data.map(this.renderRow, this)}
        </ul>
    );
  },

  renderRow(value, key) {
    return (
      <li>
        {Immutable.Iterable.isIterable(value) ? this.renderNode(value, key) : this.renderLeaf(value, key)}
      </li>
    );
  },

  renderNode(value, key) {
    return (
      <span>
        <strong>{key}</strong>
        <TreeNode data={value}/>
      </span>
    );
  },

  renderValue(value, key) {
    if (this.concealedKeys.indexOf(key) >= 0) {
      return (
        <Protected>{String(value)}</Protected>
      );
    } else {
      return String(value);
    }
  },

  renderLeaf(value, key) {
    return (
      <span>
        <strong>{key}</strong>: {this.renderValue(value, key)}
      </span>
    );
  }
});

export default TreeNode;
