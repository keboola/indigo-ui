import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Loader from './Loader';

class ConfirmButtons extends React.Component {
  render() {
    return (
      <ButtonToolbar className={classnames('btn-toolbar-confirm', this.props.className)}>
        {this.renderLoader()}
        {this.props.children}
        {!this.props.showCancel && ' '}
        {this.renderCancelButton()}
        {this.renderSaveButton()}
      </ButtonToolbar>
    );
  }

  renderLoader() {
    if (!this.props.isSaving) {
      return null;
    }

    return <Loader />;
  }

  renderSaveButton() {
    if (!this.props.showSave) {
      return null;
    }

    return (
      <Button
        className="btn-confirm"
        type={this.props.saveButtonType}
        bsStyle={this.props.saveStyle}
        disabled={this.props.isSaving || this.props.isDisabled}
        onClick={this.props.onSave}
      >
        {this.props.saveLabel}
      </Button>
    );
  }

  renderCancelButton() {
    if (!this.props.showCancel) {
      return null;
    }

    return (
      <Button
        className="btn-confirm"
        bsStyle="link"
        disabled={this.props.isSaving}
        onClick={this.props.onCancel}
      >
        {this.props.cancelLabel}
      </Button>
    );
  }
}

ConfirmButtons.defaultProps = {
  onSave: () => {},
  onCancel: () => {},
  saveLabel: 'Save',
  saveStyle: 'success',
  cancelLabel: 'Cancel',
  saveButtonType: 'button',
  isSaving: false,
  isDisabled: false,
  showSave: true,
  showCancel: true
};

ConfirmButtons.propTypes = {
  isSaving: PropTypes.bool,
  isDisabled: PropTypes.bool,
  cancelLabel: PropTypes.string,
  saveLabel: PropTypes.string,
  saveStyle: PropTypes.string,
  onCancel: PropTypes.func,
  onSave: PropTypes.func,
  saveButtonType: PropTypes.oneOf(['button', 'submit']),
  showCancel: PropTypes.bool,
  showSave: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.any
};

export default ConfirmButtons;
