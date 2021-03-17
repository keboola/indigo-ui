import React from 'react';
import { action } from '@storybook/addon-actions';
import InlineEditInput from '../../../indigo/components/InlineEditInput';

export default class InlineEditInputExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialText: '',
      text: '',
      isEditing: false,
      isSaving: false,
    };
  }

  render() {
    return (
      <h1>
        <InlineEditInput
          isEditing={this.state.isEditing}
          isValid
          onEditStart={() => {
            action('editing started')();
            this.setState({
              isEditing: true,
            });
          }}
          onEditCancel={() => {
            action('editing cancelled')();
            this.setState({
              isEditing: false,
              text: this.state.initialText,
            });
          }}
          onEditChange={(text) => {
            this.setState({
              text,
            });
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
              });
            }, 1000);
          }}
          text={this.state.text}
          isSaving={this.state.isSaving}
          editTooltip="Click to edit"
          placeholder={this.state.isEditing ? 'Writer name' : 'Click to edit'}
        />
      </h1>
    );
  }
}
