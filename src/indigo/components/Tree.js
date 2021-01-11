import React from 'react';
import PropTypes from 'prop-types';

import TreeNode from './tree/TreeNode';

class Tree extends React.Component {
  render() {
    return (
      <div className="tree" onClick={this.props.onClick}>
        <TreeNode data={this.props.data} />
      </div>
    );
  }
}

Tree.propTypes = {
  data: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export default Tree;
