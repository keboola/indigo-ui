import React from 'react';

import { snapshot } from '../../tests';
import InlineEditTextInput from './InlineEditTextInput';

describe('<InlineEditTextInput />', () => {
  const compulsoryProps = {
    onEditStart: () => null,
    onEditCancel: () => null,
    onEditChange: () => null,
    onEditSubmit: () => null
  };

  it('InlineEditTextInput - default', () => {
    snapshot(<InlineEditTextInput {...compulsoryProps} />);
  });

  it('InlineEditTextInput - read mode', () => {
    snapshot(<InlineEditTextInput {...compulsoryProps} isEditing={false} />);
  });

  it('InlineEditTextInput - edit mode', () => {
    snapshot(<InlineEditTextInput {...compulsoryProps} isEditing={true} />);
  });

  it('InlineEditTextInput - saving in edit mode', () => {
    snapshot(<InlineEditTextInput {...compulsoryProps} isEditing={true} isSaving={true} />);
  });

  it('InlineEditTextInput - disabled save button when text is not valid', () => {
    snapshot(<InlineEditTextInput {...compulsoryProps} isEditing={true} isValid={false} />);
  });
});
