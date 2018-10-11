import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Panel, Button, Form, FormGroup, FormControl, ControlLabel, Col, Row} from 'react-bootstrap';
import {Icon} from '../../indigo/components';

const headerContent = (
  <Row>
    <Col xs={5}>
      in.c-csv-import.407799760
    </Col>
    <Col xs={1}>
      <i className="fa fa-chevron-right"/>
    </Col>
    <Col xs={4}>
      <i className="fa fa-table"/> commit_parents
    </Col>
    <Col xs={2}>
      <Button bsStyle="link">
        <Icon.Trash className="icon-size-16"/>
      </Button>
      <Button bsStyle="link">
        <Icon.Edit className="icon-size-16"/>
      </Button>
    </Col>
  </Row>
)

storiesOf('MappingDetail', module)
  .add(
    'Input Mapping Header',
    withInfo({
      text: `dummy`,
      inline: true,
    })(() => {
      return (
        <div className="mapping">
          <h2><span>Input Mapping</span>
            <span className="pull-right add-mapping-button">
              <Button bsStyle="success">
                <i className="kbc-icon-plus"></i>New Input
              </Button>
            </span>
          </h2>
          <div className="mapping-rows">
            <Panel
              header={headerContent}
              collapsible
            >
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>
                    Source Table
                  </Col>
                  <Col sm={10}>
                    <FormControl.Static componentClass="div">in.c-csv-import.407799760</FormControl.Static>
                  </Col>
                </FormGroup>
                
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Columns
                  </Col>
                  <Col sm={10}>
                    <FormControl.Static componentClass="div">Longitude</FormControl.Static>
                  </Col>
                </FormGroup>
                <FormGroup controlId="formHorizontalPassword">
                  <Col componentClass={ControlLabel} sm={2}>
                    Filters
                  </Col>
                  <Col sm={10}>
                    <FormControl.Static componentClass="div">
                      Where longitudenot in [space character] and changed in last
                      45 minutes
                    </FormControl.Static>
                  </Col>
                </FormGroup>
              </Form>
            </Panel>
          </div>
        </div>
      )
    })
  )
    
