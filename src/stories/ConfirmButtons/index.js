import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from 'react-bootstrap';
import { action } from '@storybook/addon-actions';
import ConfirmButtons from '../../indigo/components/ConfirmButtons';

storiesOf('ConfirmButtons', module)
  .add('Basic Init', () => <ConfirmButtons />)
  .add('Saving', () => <ConfirmButtons isSaving />)
  .add('Disabled', () => <ConfirmButtons isDisabled />)
  .add('Show Save button', () => <ConfirmButtons showSave={false} />)
  .add('Show Cancel button', () => <ConfirmButtons showCancel={false} />)
  .add('Additional buttons', () => (
    <ConfirmButtons>
      <Button>Try Query</Button>
    </ConfirmButtons>
  ))
  .add('Cancel label', () => <ConfirmButtons cancelLabel="Reset" />)
  .add('Save label', () => <ConfirmButtons saveLabel="Save Configuration" />)
  .add('Save button style', () => <ConfirmButtons saveStyle="primary" />)
  .add('Save button type', () => <ConfirmButtons saveButtonType="submit" />)
  .add('Additional class', () => (
    <div className="clearfix">
      <ConfirmButtons className="pull-right" />
    </div>
  ))
  .add('Events demo', () => (
    <div className="clearfix">
      <ConfirmButtons onSave={action('event - save')} onCancel={action('event - cancel')} />
    </div>
  ));
