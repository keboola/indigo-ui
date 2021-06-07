import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import { Button, ButtonToolbar } from 'react-bootstrap';
import Loader from './Loader';

class ConfirmButtons extends React.Component {
  render() {
    if (this.props.block) {
      return this.renderSaveButton();
    }

    return (
      <ButtonToolbar className={classnames('btn-toolbar-confirm', this.props.className)}>
        {this.props.isSaving && <Loader />}
        {this.props.children}
        {!this.props.showCancel && ' '}
        {this.renderCancelButton()}
        {this.renderSaveButton()}
      </ButtonToolbar>
    );
  }

  renderSaveButton() {
    if (!this.props.showSave) {
      return null;
    }

    return (
      <Button
        className="btn-confirm"
        block={this.props.block}
        type={this.props.saveButtonType}
        bsStyle={this.props.saveStyle}
        disabled={this.props.isSaving || this.props.isDisabled}
        onClick={this.props.onSave}
      >
        {this.props.block && (
          <>
            {this.props.isSaving ? (
              <Loader className="icon-addon-right" />
            ) : (
              this.props.saveStyle !== 'danger' && (
                <FontAwesomeIcon icon={faCheckCircle} className="icon-addon-right" />
              )
            )}
          </>
        )}
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
  showCancel: true,
  block: false,
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
  block: PropTypes.bool,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.any,
};

export default ConfirmButtons;
