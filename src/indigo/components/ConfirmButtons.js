/*
   Edit buttons
   When editing Save and Cancel buttons are shown. These buttons are disabled and loader is shown when saving.
   Edit butotn is shown when editing mode is disabled.
 */
import React from 'react';
import classnames from 'classnames';

import { Button, ButtonToolbar } from 'react-bootstrap';

import { Loader } from 'Loader';

export default React.createClass({
  propTypes: {
    isSaving: React.PropTypes.bool.isRequired,
    isDisabled: React.PropTypes.bool,
    cancelLabel: React.PropTypes.string,
    saveLabel: React.PropTypes.string,
    saveStyle: React.PropTypes.string,
    onCancel: React.PropTypes.func,
    onSave: React.PropTypes.func.isRequired,
    saveButtonType: React.PropTypes.oneOf(['button', 'submit']),
    showCancel: React.PropTypes.bool,
    showSave: React.PropTypes.bool,
    className: React.PropTypes.string,
    children: React.PropTypes.any
  },

  getDefaultProps() {
    return {
      saveLabel: 'Save',
      saveStyle: 'success',
      cancelLabel: 'Cancel',
      saveButtonType: 'button',
      isDisabled: false,
      showSave: true,
      showCancel: true
    };
  },

  render() {
    return (
      <ButtonToolbar className={classnames('kbc-buttons', this.props.className)}>
        {this._loader()}
        {this.props.children}
        {!this.props.showCancel && ' '}
        {this._cancelButton()}
        {this._saveButton()}
      </ButtonToolbar>
    );
  },

  _loader() {
    if (this.props.isSaving) return <Loader />;
    return null;
  },

  _saveButton() {
    if (this.props.showSave) {
      return (
        <Button
          type={this.props.saveButtonType}
          bsStyle={this.props.saveStyle}
          disabled={this.props.isSaving || this.props.isDisabled}
          onClick={this.props.onSave}
        >
          {this.props.saveLabel}
        </Button>
      );
    } else return null;
  },

  _cancelButton() {
    if (this.props.showCancel) {
      return (
        <Button bsStyle="link" disabled={this.props.isSaving} onClick={this.props.onCancel}>
          {this.props.cancelLabel}
        </Button>
      );
    } else return null;
  }
});
