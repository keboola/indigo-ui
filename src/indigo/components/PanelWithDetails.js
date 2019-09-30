import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Panel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons/faAngleUp';

const PLACEMENT_BOTTOM = 'bottom';
const PLACEMENT_TOP = 'top';

class PanelWithDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expanded: props.defaultExpanded,
      panelHeaderTitle: props.defaultExpanded ? props.labelCollapse : props.labelOpen,
    };

    this.toggleExpanded = this.toggleExpanded.bind(this);
  }

  render() {
    return (
      <Panel
        collapsible
        expanded={this.state.expanded}
        onSelect={this.toggleExpanded}
        header={this.renderHeader()}
        className={classnames('panel-show-details', `panel-show-details-${this.props.placement}`, {
          'panel-preview': !!this.props.preview,
          [`panel-preview-${this.props.preview}`]: !!this.props.preview,
        })}
      >
        {this.props.children}
      </Panel>
    );
  }

  renderHeader() {
    return (
      <div>
        <FontAwesomeIcon fixedWidth icon={this.getIcon()} className="icon-addon-right" />
        {this.state.panelHeaderTitle}
      </div>
    );
  }

  getIcon() {
    if (this.props.placement === PLACEMENT_BOTTOM) {
      return this.state.expanded ? faAngleUp : faAngleRight;
    }
    return this.state.expanded ? faAngleDown : faAngleRight;
  }

  toggleExpanded() {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
      panelHeaderTitle: !prevState.expanded ? this.props.labelCollapse : this.props.labelOpen,
    }));
  }
}

PanelWithDetails.propTypes = {
  defaultExpanded: PropTypes.bool,
  labelCollapse: PropTypes.string,
  labelOpen: PropTypes.string,
  children: PropTypes.any.isRequired,
  placement: PropTypes.oneOf([PLACEMENT_BOTTOM, PLACEMENT_TOP]),
  preview: PropTypes.oneOf(['normal', 'small']),
};

PanelWithDetails.defaultProps = {
  defaultExpanded: false,
  labelCollapse: 'Hide details',
  labelOpen: 'Show details',
  placement: PLACEMENT_TOP,
};

export default PanelWithDetails;
