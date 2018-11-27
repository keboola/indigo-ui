import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Button} from 'react-bootstrap';
import {action} from "@storybook/addon-actions";
import ConfirmButtons from '../../indigo/components/ConfirmButtons';

storiesOf('ConfirmButtons', module)
  .add(
    'Basic Init',
    withInfo({
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Saving',
    withInfo({
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          onSave={() => null}
          isSaving={true}
        />
      );
    })
  )
  .add(
    'Disabled',
    withInfo({
      text: `
        Use for validating
        `,
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          isDisabled={true}
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Show Save button',
    withInfo({
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          showSave={false}
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Show Cancel button',
    withInfo({
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          showCancel={false}
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Additional buttons',
    withInfo({
      inline: true,
      text: `
        Option to add additional class names eg: "pull-right" for alignment
        `,
    })(() => {
      return (
        <ConfirmButtons
          onSave={() => null}
          isSaving={false}
        >
          <Button>Try Query</Button>
        </ConfirmButtons>
      );
    })
  )
  .add(
    'Cancel label',
    withInfo({
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          cancelLabel="Reset"
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Save label',
    withInfo({
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          saveLabel="Save Configuration"
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Save button style',
    withInfo({
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          saveStyle="primary"
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Save button type',
    withInfo({
      text: `
        Use type="submit" attribute
        `,
      inline: true,
    })(() => {
      return (
        <ConfirmButtons
          saveButtonType="submit"
          onSave={() => null}
          isSaving={false}
        />
      );
    })
  )
  .add(
    'Additional class',
    withInfo({
      inline: true,
      text: `
        Option to add additional class for styling eg: "pull-right" for alignment
        `,
    })(() => {
      return (
        <div className="clearfix">
          <ConfirmButtons
            className="pull-right"
            onSave={() => null}
            isSaving={false}
          />
        </div>
      );
    })
  )
  .add(
    'Events demo',
    withInfo({
      inline: true,
      text: `
        onSave & onCancel
        `,
    })(() => {
      return (
        <div className="clearfix">
          <ConfirmButtons
            onSave={action('event - save')}
            onCancel={action('event - cancel')}
            isSaving={false}
          />
        </div>
      );
    })
  );
