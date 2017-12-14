import React from 'react';

const Check = React.createClass({
  propTypes: {
    isChecked: React.PropTypes.bool.isRequired
  },

  render() {
    return (
      <i className={this.props.isChecked ? 'fa fa-fw fa-check' : 'fa fa-fw fa-times'}/>
    );
  }
});

export default Check;
