import React from 'react';
import { Button } from 'react-bootstrap';
import { matchesSnapshot } from '../../tests';
import ConfirmButtons from './ConfirmButtons';

describe('<ConfirmButtons />', () => {
  it('Basic Init', () => {
    matchesSnapshot(<ConfirmButtons onSave={() => null} isSaving={false} />);
  });

  it('Saving', () => {
    matchesSnapshot(<ConfirmButtons onSave={() => null} isSaving />);
  });

  it('Disabled', () => {
    matchesSnapshot(<ConfirmButtons isDisabled onSave={() => null} isSaving={false} />);
  });

  it('Show Save button', () => {
    matchesSnapshot(<ConfirmButtons showSave={false} onSave={() => null} isSaving={false} />);
  });

  it('Show Cancel button', () => {
    matchesSnapshot(<ConfirmButtons showCancel={false} onSave={() => null} isSaving={false} />);
  });

  it('Additional buttons', () => {
    matchesSnapshot(
      <ConfirmButtons onSave={() => null} isSaving={false}>
        <Button>Try Query</Button>
      </ConfirmButtons>
    );
  });

  it('Cancel label', () => {
    matchesSnapshot(<ConfirmButtons cancelLabel="Reset" onSave={() => null} isSaving={false} />);
  });

  it('Save label', () => {
    matchesSnapshot(
      <ConfirmButtons saveLabel="Save Configuration" onSave={() => null} isSaving={false} />
    );
  });

  it('Save button style', () => {
    matchesSnapshot(<ConfirmButtons saveStyle="primary" onSave={() => null} isSaving={false} />);
  });

  it('Save button type', () => {
    matchesSnapshot(
      <ConfirmButtons saveButtonType="submit" onSave={() => null} isSaving={false} />
    );
  });

  it('Additional class', () => {
    matchesSnapshot(
      <div className="clearfix">
        <ConfirmButtons className="pull-right" onSave={() => null} isSaving={false} />
      </div>
    );
  });
});
