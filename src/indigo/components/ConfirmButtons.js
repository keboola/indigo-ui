import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Loader from './Loader';

class ConfirmButtons extends React.Component {
  render() {
    return (
      <ButtonToolbar className={classnames('btn-toolbar-confirm', this.props.className)}>
        {this.loader()}
        {this.props.children}
        {this.cancelButton()}
        {this.saveButton()}
      </ButtonToolbar>
    );
  }

  loader() {
    if (this.props.isSaving) return <Loader />;
    return null;
  }

  saveButton() {
    if (this.props.showSave) {
      return (
        <Button
          type={this.props.saveButtonType}
          bsStyle={this.props.saveStyle}
          disabled={this.props.isSaving || this.props.isDisabled}
          onClick={this.props.onSave}
          className="btn-confirm"
        >
          {this.props.saveLabel}
        </Button>
      );
    }
    return null;
  }

  cancelButton() {
    if (this.props.showCancel) {
      return (
        <Button
          bsStyle="link"
          disabled={this.props.isSaving}
          onClick={this.props.onCancel}
          className="btn-confirm"
        >
          {this.props.cancelLabel}
        </Button>
      );
    }
    return null;
  }
}

ConfirmButtons.defaultProps = {
  saveLabel: 'Save',
  saveStyle: 'success',
  cancelLabel: 'Cancel',
  saveButtonType: 'button',
  isDisabled: false,
  showSave: true,
  showCancel: true,
};

ConfirmButtons.propTypes = {
  isSaving: PropTypes.bool.isRequired,
  isDisabled: PropTypes.bool,
  cancelLabel: PropTypes.string,
  saveLabel: PropTypes.string,
  saveStyle: PropTypes.string,
  onCancel: PropTypes.func,
  onSave: PropTypes.func.isRequired,
  saveButtonType: PropTypes.oneOf(['button', 'submit']),
  showCancel: PropTypes.bool,
  showSave: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

export default ConfirmButtons;
