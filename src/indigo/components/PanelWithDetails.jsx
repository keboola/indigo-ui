import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {Panel} from 'react-bootstrap';

class PanelWithDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panelHeaderTitle: props.defaultExpanded ? props.labelCollapse : props.labelOpen
    };
  }
  
  render() {
    return (
      <Panel
        onEnter={() => this.setState({panelHeaderTitle: this.props.labelCollapse})}
        onExit={() => this.setState({panelHeaderTitle: this.props.labelOpen})}
        header={this.state.panelHeaderTitle}
        defaultExpanded={this.props.defaultExpanded}
        className={classNames(
          'panel-show-details',
          [`panel-show-details-${this.props.placement}`],
          {'panel-preview': this.props.preview},
          {[`panel-preview-${this.props.preview}`]: this.props.preview}
          )
        }
        collapsible={true}
      >
        {this.props.children}
      </Panel>
    );
  }
}

PanelWithDetails.propTypes = {
  defaultExpanded: PropTypes.bool,
  labelCollapse: PropTypes.string,
  labelOpen: PropTypes.string,
  children: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom']),
  preview: PropTypes.string
};

PanelWithDetails.defaultProps = {
  defaultExpanded: false,
  labelCollapse: 'Hide details',
  labelOpen: 'Show details',
  placement: 'top',
  preview: null
};

export default PanelWithDetails;
