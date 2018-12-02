import React from 'react';

import { snapshot } from '../../tests';
import InlineEditInput from './InlineEditInput';

describe('<InlineEditInput />', () => {
  const compulsoryProps = {
    onEditStart: () => null,
    onEditCancel: () => null,
    onEditChange: () => null,
    onEditSubmit: () => null,
  };

  it('InlineEditInput - default', () => {
    snapshot(<InlineEditInput {...compulsoryProps} />);
  });

  it('InlineEditInput - read mode', () => {
    snapshot(<InlineEditInput {...compulsoryProps} isEditing={false} />);
  });

  it('InlineEditInput - edit mode', () => {
    snapshot(<InlineEditInput {...compulsoryProps} isEditing />);
  });

  it('InlineEditInput - saving in edit mode', () => {
    snapshot(<InlineEditInput {...compulsoryProps} isEditing isSaving />);
  });

  it('InlineEditInput - disabled save button when text is not valid', () => {
    snapshot(<InlineEditInput {...compulsoryProps} isEditing isValid={false} />);
  });
});
