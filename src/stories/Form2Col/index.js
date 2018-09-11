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
    <FormGroup controlId="formHorizontalEmail">
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
    'form',
    withInfo({
      text: `
        Responsive multiple column divided by border. Try to move with browser height.
        `,
      inline: true,
    })(() => {
      return (
        <div style={{background: '#fff', padding: '16px'}}>
          <Form horizontal>
            <div className="container-fluid container-bordered">
              <Row>
                <Col md={6}>
                  {formContent}
                  {formContent}
                  {formContent}
                  {formContent}
                </Col>
                <Col md={6}>
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
