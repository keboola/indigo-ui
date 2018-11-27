import React from 'react';
import { snapshot } from '../../tests';
import {Button} from 'react-bootstrap';
import ConfirmButtons from '../../indigo/components/ConfirmButtons';


describe('<Check />', () => {
  it('Basic Init', () => {
    snapshot(<ConfirmButtons
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Saving', () => {
    snapshot(<ConfirmButtons
          onSave={() => null}
          isSaving={true}
        />);
  });

  it('Disabled', () => {
    snapshot(<ConfirmButtons
          isDisabled={true}
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Show Save button', () => {
    snapshot(<ConfirmButtons
          showSave={false}
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Show Cancel button', () => {
    snapshot(<ConfirmButtons
          showCancel={false}
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Additional buttons', () => {
    snapshot(<ConfirmButtons
          onSave={() => null}
          isSaving={false}
        >
          <Button>Try Query</Button>
        </ConfirmButtons>);
  });

  it('Cancel label', () => {
    snapshot(<ConfirmButtons
          cancelLabel="Reset"
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Save label', () => {
    snapshot(<ConfirmButtons
          saveLabel="Save Configuration"
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Save button style', () => {
    snapshot(<ConfirmButtons
          saveStyle="primary"
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Save button type', () => {
    snapshot(<ConfirmButtons
          saveButtonType="submit"
          onSave={() => null}
          isSaving={false}
        />);
  });

  it('Additional class', () => {
    snapshot(<div className="clearfix">
          <ConfirmButtons
            className="pull-right"
            onSave={() => null}
            isSaving={false}
          />
        </div>);
  });
  
});
