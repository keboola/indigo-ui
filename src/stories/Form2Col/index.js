import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {
  Col,
  Row,
  Form,
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

const formContent = (
  <FormGroup>
    <Col componentClass={ControlLabel} sm={4}>
      Email
    </Col>
    <Col sm={8}>
      <FormControl.Static>
        email@example.com
      </FormControl.Static>
    </Col>
  </FormGroup>
);

storiesOf('Form2Col', module)
  .add(
    'text content 2 columns',
    withInfo({
      text: `
        Responsive multiple column divided by border. Try to move with browser width.
        `,
      inline: true,
    })(() => {
      return (
        <div style={{background: '#fff'}}>
          <div className="container-fluid">
            <Row className="row-eq-height">
              <Col md={6} xs={12} className="col-bordered">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius eveniet illum ut voluptatum?
                  Debitis distinctio eligendi, eos ex expedita, fuga minima molestiae, necessitatibus neque nulla
                  reiciendis sequi similique tempora?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius eveniet illum ut voluptatum?
                  Debitis distinctio eligendi, eos ex expedita, fuga minima molestiae, necessitatibus neque nulla
                  reiciendis sequi similique tempora?</p>
              </Col>
              <Col md={6} xs={12} className="col-bordered">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius eveniet illum ut voluptatum?
                  Debitis distinctio eligendi, eos ex expedita, fuga minima molestiae, necessitatibus neque nulla
                  reiciendis sequi similique tempora?</p>
              </Col>
            </Row>
          </div>
        </div>
      );
    })
  )
  .add(
    'text content 3 columns',
    withInfo({
      text: `
        Responsive multiple column divided by border. Try to move with browser width.
        `,
      inline: true,
    })(() => {
      return (
        <div style={{background: '#fff'}}>
          <div className="container-fluid">
            <Row className="row-eq-height">
              <Col md={4} xs={12} className="col-bordered">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius eveniet illum ut voluptatum?
                  Debitis distinctio eligendi, eos ex expedita, fuga minima molestiae, necessitatibus neque nulla
                  reiciendis sequi similique tempora?</p>
              
              </Col>
              <Col md={4} xs={12} className="col-bordered">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius eveniet illum ut voluptatum?
                  Debitis distinctio eligendi, eos ex expedita, fuga minima molestiae, necessitatibus neque nulla
                  reiciendis sequi similique tempora?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius eveniet illum ut voluptatum?
                  Debitis distinctio eligendi, eos ex expedita, fuga minima molestiae, necessitatibus neque nulla
                  reiciendis sequi similique tempora?</p>
              </Col>
              <Col md={4} xs={12} className="col-bordered">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eius eveniet illum ut voluptatum?
                  Debitis distinctio eligendi, eos ex expedita, fuga minima molestiae, necessitatibus neque nulla
                  reiciendis sequi similique tempora?</p>
              </Col>
            </Row>
          </div>
        </div>
      );
    })
  )
  .add(
    'form',
    withInfo({
      text: `
        Responsive multiple column divided by border. Try to move with browser height.
        `,
      inline: true,
    })(() => {
      return (
        <div style={{background: '#fff'}}>
          <Form horizontal className="form-bordered">
            <div className="container-fluid">
              <Row className="row-eq-height">
                <Col md={6} sm={12} xs={12} className="col-bordered">
                  {formContent}
                  {formContent}
                  {formContent}
                </Col>
                <Col md={6} sm={12} xs={12} className="col-bordered">
                  {formContent}
                  {formContent}
                  {formContent}
                  {formContent}
                  {formContent}
                </Col>
              </Row>
            </div>
          </Form>
        </div>
      );
    })
  )
