import React, {PropTypes} from 'react';
import {Panel} from 'react-bootstrap';

export default React.createClass({

  propTypes: {
    defaultExpanded: PropTypes.bool,
    labelCollapse: PropTypes.string,
    labelOpen: PropTypes.string,
    children: PropTypes.any.isRequired,
  },

  getDefaultProps() {
    return ({
      defaultExpanded: false,
      labelCollapse: 'Hide details',
      labelOpen: 'Show details'
    });
  },

  getInitialState() {
    return ({
      panelHeaderTitle: this.props.defaultExpanded ? this.props.labelCollapse : this.props.labelOpen
    });
  },

  render() {
    return (
      <Panel
        onEnter={() => this.setState({panelHeaderTitle: this.props.labelCollapse})}
        onExit={() => this.setState({panelHeaderTitle: this.props.labelOpen})}
        header={this.state.panelHeaderTitle}
        defaultExpanded={this.props.defaultExpanded}
        className="panel-show-details"
        collapsible={true}
      >
        {this.props.children}
      </Panel>
    );
  }
});
