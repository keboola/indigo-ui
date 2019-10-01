import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt';
import Loader from './Loader';

class InlineEditTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    if (this.props.isEditing) {
      return this.renderEditInput();
    }

    return this.renderStaticInput();
  }

  handleOnChange(e) {
    return this.props.onEditChange(e.target.value);
  }

  handleOnSubmit(e) {
    e.preventDefault();
    return this.props.onEditSubmit();
  }

  renderEditInput() {
    return (
      <div className="inline-edit-input">
        <form className="inline-edit-input-form" onSubmit={this.handleOnSubmit}>
          <FormControl
            className="inline-edit-input-control"
            type="text"
            value={this.props.text}
            disabled={this.props.isSaving}
            placeholder={this.props.placeholder}
            onChange={this.handleOnChange}
            autoFocus
          />

          <div className="inline-edit-input-buttons">
            <Button
              className="inline-edit-input-cancel"
              bsStyle="link"
              disabled={this.props.isSaving}
              onClick={this.props.onEditCancel}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </Button>
            <Button
              className="inline-edit-input-submit"
              bsStyle="primary"
              disabled={this.props.isSaving || !this.props.isValid}
              type="submit"
            >
              Save
            </Button>
            {this.props.isSaving && <Loader />}
          </div>
        </form>
      </div>
    );
  }

  renderStaticInput() {
    const tooltip = <Tooltip id="inline-edit-input-tooltip">{this.props.editTooltip}</Tooltip>;

    return (
      <OverlayTrigger placement={this.props.tooltipPlacement} overlay={tooltip}>
        <span className="inline-edit-input-link" onClick={this.props.onEditStart}>
          {this.props.text ? (
            <span>{this.props.text}</span>
          ) : (
            <span className="text-muted">{this.props.placeholder}</span>
          )}
          <FontAwesomeIcon icon={faPencilAlt} fixedWidth className="icon-addon-left" />
        </span>
      </OverlayTrigger>
    );
  }
}

InlineEditTextInput.propTypes = {
  onEditStart: PropTypes.func.isRequired,
  onEditCancel: PropTypes.func.isRequired,
  onEditChange: PropTypes.func.isRequired,
  onEditSubmit: PropTypes.func.isRequired,
  text: PropTypes.string,
  isSaving: PropTypes.bool,
  isEditing: PropTypes.bool,
  isValid: PropTypes.bool,
  editTooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  placeholder: PropTypes.string,
};

InlineEditTextInput.defaultProps = {
  placeholder: 'Click to edit',
  editTooltip: 'Click to edit',
  tooltipPlacement: 'top',
  isSaving: false,
  isEditing: false,
};

export default InlineEditTextInput;
