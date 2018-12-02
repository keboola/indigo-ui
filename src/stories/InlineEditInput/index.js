import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import {action} from "@storybook/addon-actions";

import InlineEditInput from '../../indigo/components/InlineEditInput';

export default class InlineEditInputExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialText: '',
      text: '',
      isEditing: false,
      isSaving: false
    };
  }

  render() {
    return (
      <InlineEditInput
        isEditing={this.state.isEditing}
        isValid
        onEditStart={() => {
          action('editing started')();
          this.setState({
            isEditing: true
          })
        }}
        onEditCancel={() => {
          action('editing cancelled')();
          this.setState({
            isEditing: false,
            text: this.state.initialText
          })
        }}
        onEditChange={(text) => {
          this.setState({
            text
          })
        }}
        onEditSubmit={() => {
          action('form submitted')();
          this.setState({
            isSaving: true,
          });
          setTimeout(() => {
            this.setState({
              initialText: this.state.text,
              isEditing: false,
              isSaving: false,
            })
          }, 1000);
        }}
        text={this.state.text}
        isSaving={this.state.isSaving}
        editTooltip="Click to edit"
        placeholder="Click to edit"
      />
    );
  }
}

storiesOf('InlineEditInput', module)
  .add(
    'Read mode',
    withInfo({
      text: `
        Input in read only.
        `,
      inline: true
    })(() => {
      return (
        <InlineEditInput
          isEditing={false}
          isValid={true}
          onEditStart={() => null}
          onEditCancel={() => null}
          onEditChange={() => null}
          onEditSubmit={() => null}
          text="Original text"
          editTooltip="Click to edit"
          placeholder="Click to edit"
        />
      );
    })
  )
  .add(
    'Edit mode',
    withInfo({
      text: `
        Input in editing mode.
        `,
      inline: true
    })(() => {
      return (
        <InlineEditInput
          isEditing={true}
          isValid={true}
          onEditStart={() => null}
          onEditCancel={() => null}
          onEditChange={() => null}
          onEditSubmit={() => null}
          text="Original text"
          editTooltip="Click to edit"
          placeholder="Click to edit"
        />
      );
    })
  )
  .add(
    'Edit mode - saving',
    withInfo({
      text: `
        Input in editing mode.
        `,
      inline: true
    })(() => {
      return (
        <InlineEditInput
          isEditing={true}
          isValid={true}
          isSaving={true}
          onEditStart={() => null}
          onEditCancel={() => null}
          onEditChange={() => null}
          onEditSubmit={() => null}
          text="Original text"
          editTooltip="Click to edit"
          placeholder="Click to edit"
        />
      );
    })
  )
  .add(
    'Working example',
    withInfo({
      text: `
        Full example with actions, etc.
        `,
      inline: true
    })(() => {
      return (
        <div>
          some text <InlineEditInputExample />
        </div>
      );
    })
  );
