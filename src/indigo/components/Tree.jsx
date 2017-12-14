import React from 'react';
import TreeNode from './tree/TreeNode';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func
  },

  render() {
    return (
      <div className="kb-tree" onClick={this.props.onClick}>
        <TreeNode data={this.props.data}/>
      </div>
    );
  }

});