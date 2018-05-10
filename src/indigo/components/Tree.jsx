import React from 'react';
import PropTypes from 'prop-types';

import TreeNode from './tree/TreeNode';

export default React.createClass({
  propTypes: {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func
  },

  render() {
    return (
      <div className="kb-tree" onClick={this.props.onClick}>
        <TreeNode data={this.props.data}/>
      </div>
    );
  }

});
