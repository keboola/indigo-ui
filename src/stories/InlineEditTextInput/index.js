import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import InlineEditTextInput from '../../indigo/components/InlineEditTextInput';

storiesOf('InlineEditTextInput', module)
  .add(
    'Read mode',
    withInfo({
      text: `
        Input in read only.
        `,
      inline: true
    })(() => {
      return (
        <InlineEditTextInput
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
        <InlineEditTextInput
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
  ).add(
    'Edit mode - saving',
    withInfo({
      text: `
        Input in editing mode.
        `,
      inline: true
    })(() => {
      return (
        <InlineEditTextInput
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
  );
