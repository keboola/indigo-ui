import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormControl, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Loader from './Loader';

class InlineEditTextInput extends React.Component {
  render() {
    if (this.props.isEditing) {
      return this._renderEditInput();
    }

    return this._renderStaticInput();
  }

  _onChange(e) {
    return this.props.onEditChange(e.target.value);
  }

  _onSubmit(e) {
    e.preventDefault();
    return this.props.onEditSubmit();
  }

  _renderEditInput() {
    return (
      <div className="form-inline kbc-inline-edit">
        <form onSubmit={this._onSubmit}>
          <FormControl
            type="text"
            value={this.props.text}
            disabled={this.props.isSaving}
            placeholder={this.props.placeholder}
            onChange={this._onChange}
          />

          <div className="kbc-inline-edit-buttons">
            <Button
              className="kbc-inline-edit-cancel"
              bsStyle="link"
              disabled={this.props.isSaving}
              onClick={this.props.onEditCancel}
            >
              <span className="kbc-icon-cross" />
            </Button>
            <Button
              className="kbc-inline-edit-submit"
              bsStyle="info"
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

  _renderStaticInput() {
    const tooltip = (
      <Tooltip id="kbc-inline-edit-link-tooltip">
        {this.props.editTooltip}
      </Tooltip>
    );

    return (
      <OverlayTrigger placement={this.props.tooltipPlacement} overlay={tooltip}>
        <span className="kbc-inline-edit-link" onClick={this.props.onEditStart}>
          {this.props.text ? (
            <span>{this.props.text}</span>
          ) : (
            <span className="text-muted">{this.props.placeholder}</span>
          )}
          <span className="kbc-icon-pencil" />
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
  placeholder: PropTypes.string
};

InlineEditTextInput.defaultProps = {
  placeholder: 'Click to edit',
  editTooltip: 'Click to edit',
  tooltipPlacement: 'top',
  isSaving: false,
  isEditing: false
};

export default InlineEditTextInput;
