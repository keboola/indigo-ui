import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Panel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons/faAngleDown';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

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
        <FontAwesomeIcon
          fixedWidth
          icon={this.state.expanded ? faAngleDown : faAngleRight}
          className="icon-addon-right"
        />
        {this.state.panelHeaderTitle}
      </div>
    );
  }

  toggleExpanded() {
    this.setState((prevState) => ({ expanded: !prevState.expanded }));
  }
}

PanelWithDetails.propTypes = {
  defaultExpanded: PropTypes.bool,
  labelCollapse: PropTypes.string,
  labelOpen: PropTypes.string,
  children: PropTypes.any.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom']),
  preview: PropTypes.oneOf(['normal', 'small']),
};

PanelWithDetails.defaultProps = {
  defaultExpanded: false,
  labelCollapse: 'Hide details',
  labelOpen: 'Show details',
  placement: 'top',
};

export default PanelWithDetails;
