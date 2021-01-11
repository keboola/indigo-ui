import React from 'react';

import { matchesSnapshot } from '../../tests';
import InlineEditInput from './InlineEditInput';

describe('<InlineEditInput />', () => {
  const compulsoryProps = {
    onEditStart: () => null,
    onEditCancel: () => null,
    onEditChange: () => null,
    onEditSubmit: () => null
  };

  it('InlineEditInput - default', () => {
    matchesSnapshot(<InlineEditInput {...compulsoryProps} />);
  });

  it('InlineEditInput - read mode', () => {
    matchesSnapshot(<InlineEditInput {...compulsoryProps} isEditing={false} />);
  });

  it('InlineEditInput - edit mode', () => {
    matchesSnapshot(<InlineEditInput {...compulsoryProps} isEditing />);
  });

  it('InlineEditInput - saving in edit mode', () => {
    matchesSnapshot(<InlineEditInput {...compulsoryProps} isEditing isSaving />);
  });

  it('InlineEditInput - disabled save button when text is not valid', () => {
    matchesSnapshot(<InlineEditInput {...compulsoryProps} isEditing isValid={false} />);
  });
});
