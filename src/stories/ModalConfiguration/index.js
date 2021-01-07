import React from 'react';
import { storiesOf } from '@storybook/react';

import {
  Form,
  Modal,
  Row,
  Col,
  Button,
  ButtonToolbar,
  FormControl,
  ControlLabel,
  FormGroup,
  Checkbox,
} from 'react-bootstrap';

storiesOf('[CSS] ModalConfiguration', module).add('Modal Configuration', () => {
  return (
    <div className="static-modal" style={{ position: 'relative' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Row>
            <Col xs={3}>
              <img
                src="https://avatars2.githubusercontent.com/u/1424387?s=200&amp;v=4"
                width="64"
                height="64"
                alt="component logo"
              />
          </Col>
            <Col xs={9}>
              <Modal.Title componentClass="h2">
                Keboola
              </Modal.Title>
              <p>
                A new way to acquire, aggregate and distribute data to teams. SQL Based ETL,
                Analytical Storage, Data Science Notebooks. All in One Login!
              </p>
            </Col>
          </Row>
        </Modal.Header>
        <Modal.Body>
          <Form horizontal>
            <FormGroup>
              <Col componentClass={ControlLabel} xs={3}>
                Name
              </Col>
              <Col xs={9}>
                <FormControl label="Name" placeholder="My Keboola" type="text" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col componentClass={ControlLabel} xs={3}>
                Description
              </Col>
              <Col xs={9}>
                <FormControl type="textarea" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col xsOffset={3} xs={9}>
                <Checkbox>
                  I agree with these terms and conditions and with{' '}
                  <a href="https://indigo.keboola.com">vendor license terms and conditions</a>
                </Checkbox>
              </Col>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <ButtonToolbar>
            <Button bsStyle="link">Cancel</Button>
            <Button bsStyle="success">Create Configuration</Button>
          </ButtonToolbar>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
});
