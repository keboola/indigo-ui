import React, {PropTypes} from 'react';
import {Panel} from 'react-bootstrap';

export default React.createClass({

  propTypes: {
    defaultExpanded: PropTypes.bool,
    labelCollapsed: PropTypes.string,
    labelOpen: PropTypes.string,
    children: PropTypes.any
  },

  getDefaultProps() {
    return ({
      defaultExpanded: false,
      labelCollapsed: 'Show details',
      labelOpen: 'Hide details'
    });
  },

  getInitialState() {
    return ({
      panelHeaderTitle: (this.props.defaultExpanded) ? this.props.labelOpen : this.props.labelCollapsed
    });
  },

  render() {
    return (
      <Panel
        onEnter={() => this.setState({panelHeaderTitle: this.props.labelOpen})}
        onExit={() => this.setState({panelHeaderTitle: this.props.labelCollapsed})}
        header={this.state.panelHeaderTitle}
        defaultExpanded={this.props.defaultExpanded}
        className="panel-show-details"
        collapsible={true}>
          {this.props.children}
      </Panel>
    );
  }
});
