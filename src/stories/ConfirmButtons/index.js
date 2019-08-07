import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Button } from 'react-bootstrap';
import { action } from '@storybook/addon-actions';
import ConfirmButtons from '../../indigo/components/ConfirmButtons';

storiesOf('ConfirmButtons', module)
  .add(
    'Basic Init',
    withInfo({
      inline: true,
    })(() => <ConfirmButtons />)
  )
  .add(
    'Saving',
    withInfo({
      inline: true,
    })(() => <ConfirmButtons isSaving />)
  )
  .add(
    'Disabled',
    withInfo({
      text: `
        Use for validating
        `,
      inline: true,
    })(() => <ConfirmButtons isDisabled />)
  )
  .add(
    'Show Save button',
    withInfo({
      inline: true,
    })(() => <ConfirmButtons showSave={false} />)
  )
  .add(
    'Show Cancel button',
    withInfo({
      inline: true,
    })(() => <ConfirmButtons showCancel={false} />)
  )
  .add(
    'Additional buttons',
    withInfo({
      inline: true,
      text: `
        Option to add additional class names eg: "pull-right" for alignment
        `,
    })(() => (
      <ConfirmButtons>
        <Button>Try Query</Button>
      </ConfirmButtons>
    ))
  )
  .add(
    'Cancel label',
    withInfo({
      inline: true,
    })(() => <ConfirmButtons cancelLabel="Reset" />)
  )
  .add(
    'Save label',
    withInfo({
      inline: true,
    })(() => <ConfirmButtons saveLabel="Save Configuration" />)
  )
  .add(
    'Save button style',
    withInfo({
      inline: true,
    })(() => <ConfirmButtons saveStyle="primary" />)
  )
  .add(
    'Save button type',
    withInfo({
      text: `
        Uses type="submit" attribute. So it can be wrapped by <form> and submitted by pressing Enter key
        `,
      inline: true,
    })(() => <ConfirmButtons saveButtonType="submit" />)
  )
  .add(
    'Additional class',
    withInfo({
      inline: true,
      text: `
        Option to add additional class for styling eg: "pull-right" for alignment
        `,
    })(() => (
      <div className="clearfix">
        <ConfirmButtons className="pull-right" />
      </div>
    ))
  )
  .add(
    'Events demo',
    withInfo({
      inline: true,
      text: `
        onSave & onCancel
        `,
    })(() => (
      <div className="clearfix">
        <ConfirmButtons onSave={action('event - save')} onCancel={action('event - cancel')} />
      </div>
    ))
  );
