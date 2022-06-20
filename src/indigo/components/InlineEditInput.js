import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import AutosizeInput from 'react-input-autosize';
import Loader from './Loader';

class InlineEditTextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    if (this.props.isEditing) {
      return this.renderEditInput();
    }

    return this.renderStaticInput();
  }

  renderEditInput() {
    return (
      <Form inline className="inline-edit-input" onSubmit={this.handleSubmit}>
        <AutosizeInput
          inputClassName="form-control inline-edit-input-control"
          value={this.props.text}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          inputRef={(ref) => ref?.focus()}
        />
        <Button
          type="submit"
          bsStyle="primary"
          disabled={this.props.isSaving || !this.props.isValid}
          onClick={this.handleSubmit}
        >
          {this.props.isSaving ? <Loader /> : <FontAwesomeIcon icon={faCheck} />}
        </Button>
        <Button
          type="reset"
          disabled={this.props.isSaving}
          onClick={(event) => {
            event.preventDefault();
            this.props.onEditCancel();
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </Button>
      </Form>
    );
  }

  renderStaticInput() {
    return (
      <OverlayTrigger placement={this.props.tooltipPlacement} overlay={this.renderTooltip()}>
        <span
          className="inline-edit-input-edit"
          onClick={(event) => {
            event.preventDefault();
            this.props.onEditStart();
          }}
        >
          {this.props.text ? (
            this.props.text
          ) : (
            <span className="text-muted">{this.props.placeholder}</span>
          )}
          {this.props.showEditIcon && (
            <FontAwesomeIcon icon={faPen} fixedWidth className="icon-addon-left" />
          )}
        </span>
      </OverlayTrigger>
    );
  }

  renderTooltip() {
    return <Tooltip id="inline-edit-input-tooltip">{this.props.editTooltip}</Tooltip>;
  }

  handleKeyDown(e) {
    if (['Esc', 'Escape'].includes(e.key)) {
      this.props.onEditCancel();
    }
  }

  handleChange(e) {
    this.props.onEditChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onEditSubmit();
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
  showEditIcon: PropTypes.bool,
};

InlineEditTextInput.defaultProps = {
  placeholder: 'Click to edit',
  editTooltip: 'Click to edit',
  tooltipPlacement: 'top',
  isSaving: false,
  isEditing: false,
  showEditIcon: true,
  isValid: true,
};

export default InlineEditTextInput;
