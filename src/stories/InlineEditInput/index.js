import React from 'react';
import { storiesOf } from '@storybook/react';
import InlineEditInput from '../../indigo/components/InlineEditInput';
import InlineEditInputExample from './examples/InlineEditInput';

storiesOf('InlineEditInput', module)
  .add(
    'Read mode',
    () => {
      return (
        <InlineEditInput
          isEditing={false}
          isValid
          onEditStart={() => null}
          onEditCancel={() => null}
          onEditChange={() => null}
          onEditSubmit={() => null}
          text="Original text"
          editTooltip="Click to edit"
          placeholder="Click to edit"
        />
      );
    },
    { info: { text: 'Input in read only.' } }
  )
  .add(
    'Edit mode',
    () => {
      return (
        <InlineEditInput
          isEditing
          isValid
          onEditStart={() => null}
          onEditCancel={() => null}
          onEditChange={() => null}
          onEditSubmit={() => null}
          text="Original text"
          editTooltip="Click to edit"
          placeholder="Click to edit"
        />
      );
    },
    { info: { text: 'Input in editing mode.' } }
  )
  .add(
    'Edit mode - saving',
    () => {
      return (
        <InlineEditInput
          isEditing
          isValid
          isSaving
          onEditStart={() => null}
          onEditCancel={() => null}
          onEditChange={() => null}
          onEditSubmit={() => null}
          text="Original text"
          editTooltip="Click to edit"
          placeholder="Click to edit"
        />
      );
    },
    { info: { text: 'Input in editing mode.' } }
  )
  .add(
    'Working example',
    () => {
      return <InlineEditInputExample />;
    },
    { info: { text: 'Full example with actions, etc.' } }
  );
