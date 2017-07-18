import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, Button } from 'react-bootstrap';


storiesOf('Modal')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <div className="static-modal">
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    One fine body...
                </Modal.Body>

                <Modal.Footer>
                    <Button>Close</Button>
                    <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>

            </Modal.Dialog>
        </div>
    ),
    {
      inline: true,
    }
  )
;
