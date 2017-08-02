import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button } from 'react-bootstrap';


storiesOf('Modal')
  .addWithInfo(
    '🆕 Modal Yesno',
    'Desc',
    () => (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Is this a question?
                </Modal.Body>

                <Modal.Footer>
                    <Button>No</Button>
                    <Button bsStyle="primary">Yes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    ),
    {
      inline: true,
    }
  )
;
