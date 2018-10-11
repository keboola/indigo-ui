import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import {Form, Modal, Row, Col, Button, ButtonToolbar, FormControl, ControlLabel, FormGroup, Checkbox} from "react-bootstrap";

storiesOf('ModalConfiguration', module).add(
  'Modal Configuration',
  withInfo({
    inline: true,
  })(() => {
    return (
      <div className="static-modal" style={{position: 'relative'}}>
        <Modal.Dialog className="modal-configuration">
          <Modal.Header className="modal-configuration-header" closeButton>
            <Row>
              <Col xs={3}>
                <span
                  className="kb-sapi-component-icon modal-configuration-icon">
                <img src="https://assets-cdn.keboola.com/developer-portal/icons/keboola.ex-aws-s3/64/20.png"
                     width="64" height="64"/>
                </span>
              </Col>
              <Col xs={9}>
                <Modal.Title componentClass={'h2'} className="modal-configuration-title">
                  AWS S3
                </Modal.Title>
                <p>Object storage built to store and retrieve any amount of data
                  from anywhere.</p>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className="modal-configuration-body">
            <Form horizontal>
              <FormGroup>
                <Col componentClass={ControlLabel} xs={3}>
                  Name
                </Col>
                <Col xs={9}>
                  <FormControl label="Name" value="" placeholder="My AWS S3 extractor" type="text"/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col componentClass={ControlLabel} xs={3}>
                  Description
                </Col>
                <Col xs={9}>
                  <FormControl type="textarea"/>
                </Col>
              </FormGroup>
              <FormGroup>
                <Col xsOffset={3} xs={9}>
                  <Checkbox>I agree with these terms and conditions and with <a href="#">vendor license terms and conditions</a></Checkbox>
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
  })
);
