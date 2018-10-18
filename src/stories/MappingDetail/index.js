import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Panel, Button, Form, FormGroup, FormControl, ControlLabel, Col, Row, Label} from 'react-bootstrap';
import {Icon} from '../../indigo/components';

const InputMappingHeader = (
  <div className="mapping-panel-title">
    <Row className="mapping-row">
      <Col xs={4}>
        in.c-csv-import.407799760
      </Col>
      <Col xs={2}>
        <Label className="pull-right">65.04 MB</Label>
        <Label className="pull-right" title="2017-08-01 12:23:45">22 min</Label>
      </Col>
      <Col xs={1}>
        <i className="fa fa-chevron-right"/>
      </Col>
      <Col xs={3}>
        <i className="fa fa-table"/> commit_parents_test_example
      </Col>
      <Col xs={2}>
        <Button bsStyle="link" className="pull-right mapping-action">
          <Icon.Trash className="icon-size-16"/>
        </Button>
        <Button bsStyle="link" className="pull-right mapping-action">
          <Icon.Edit className="icon-size-16"/>
        </Button>
      </Col>
    </Row>
  </div>
)

const InputMappingContent = (
  <Form horizontal>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Source Table
      </Col>
      <Col sm={10}>
        <FormControl.Static>
          <a href="#">
            in.c-csv-import.407799760
          </a>
        </FormControl.Static>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Columns
      </Col>
      <Col sm={10}>
        <FormControl.Static>longitude, key, value</FormControl.Static>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Filters
      </Col>
      <Col sm={10}>
        <FormControl.Static>
          Where longitudenot in [space character] and changed in last
          45 minutes
        </FormControl.Static>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Data Types
      </Col>
      <Col sm={10}>
        <FormControl.Static>
          <ul className="list-unstyled">
            <li>
              <span>
                <strong>key</strong>
                <code>FLOAT</code>
                <span>
                  <span>, convert emtpy values to </span>
                  <code>null</code>
                </span>
              </span>
            </li>
            <li>
              <span>
                <strong>longitude</strong><code>VARCHAR(123)</code>
              </span>
            </li>
            <li>
              <span>
                <strong>value</strong>
                <code>FLOAT</code>
                <span>
                  <span>, convert emtpy values to </span>
                  <code>null</code>
                </span>
              </span>
            </li>
          </ul>
        </FormControl.Static>
      </Col>
    </FormGroup>
  </Form>
)

const OutputMappingHeader = (
  <div className="mapping-panel-title">
    <Row className="mapping-row">
      <Col xs={3}>
        <i className="fa fa-table"/> in.c-csv-import.407799760
      </Col>
      <Col xs={1}>
        <i className="fa fa-chevron-right"/>
      </Col>
      <Col xs={4}>
        commit_parents_test_example
      </Col>
      <Col xs={2}>
        <Label className="pull-right">Incremental</Label>
        <Label className="pull-right">65.04 MB</Label>
        <Label className="pull-right" title="2017-08-01 12:23:45">22 min</Label>
      </Col>
      <Col xs={2}>
        <Button bsStyle="link" className="pull-right mapping-action">
          <Icon.Trash className="icon-size-16"/>
        </Button>
        <Button bsStyle="link" className="pull-right mapping-action">
          <Icon.Edit className="icon-size-16"/>
        </Button>
      </Col>
    </Row>
  </div>
)


const OutputMappingContent = (
  <Form horizontal>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Destination table
      </Col>
      <Col sm={10}>
        <FormControl.Static>
          <a href="#">
            out.c-test.fsdfdsfsd
          </a>
        </FormControl.Static>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Primary key
      </Col>
      <Col sm={10}>
        <FormControl.Static>dsf, fsdf, sdfsd</FormControl.Static>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Incremental
      </Col>
      <Col sm={10}>
        <FormControl.Static>
          <Icon.Check className="icon-size-16"/>
        </FormControl.Static>
      </Col>
    </FormGroup>
    <FormGroup>
      <Col componentClass={ControlLabel} sm={2}>
        Data Types
      </Col>
      <Col sm={10}>
        <FormControl.Static>
          Where dfs in [empty string], [space character]
        </FormControl.Static>
      </Col>
    </FormGroup>
  </Form>
)

storiesOf('MappingDetail', module)
  .add(
    'Input Mapping',
    withInfo({
      inline: true,
    })(() => {
      return (
        <div className="mapping">
          <div className="mapping-header">
            <h2>
              Input Mapping
            </h2>
            <Button bsStyle="success">
              <i className="kbc-icon-plus"></i>New Input
            </Button>
          </div>
          
          <div className="mapping-rows">
            <Panel
              header={InputMappingHeader}
              collapsible
            >
              {InputMappingContent}
            </Panel>
          </div>
        </div>
      )
    })
  )
  
  .add(
    'Output Mapping',
    withInfo({
      inline: true,
    })(() => {
      return (
        <div className="mapping">
          <div className="mapping-header">
            <h2>
              Output Mapping
            </h2>
            <Button bsStyle="success">
              <i className="kbc-icon-plus"></i>New Output
            </Button>
          </div>
          
          <div className="mapping-rows">
            <Panel
              header={OutputMappingHeader}
              collapsible
            >
              {OutputMappingContent}
            </Panel>
          </div>
        </div>
      )
    })
  )
  
  .add(
    'Input Mapping - empty state',
    withInfo({
      inline: true,
    })(() => {
      return (
        <div className="mapping">
          <div className="mapping-header">
            <h2>
              Input Mapping
            </h2>
            <Button bsStyle="success">
              <i className="kbc-icon-plus"></i>New Input
            </Button>
          </div>
          <div className="mapping-empty-state">
            <small>No Input assigned</small>
            <Icon.MappingOut className="icon-size-64"/>
          </div>
        </div>
      )
    })
  )
  
  .add(
    'Output Mapping - empty state',
    withInfo({
      inline: true,
    })(() => {
      return (
        <div className="mapping">
          <div className="mapping-header">
            <h2>
              Output Mapping
            </h2>
            <Button bsStyle="success">
              <i className="kbc-icon-plus"></i>New Output
            </Button>
          </div>
          <div className="mapping-empty-state">
            <small>No Output assigned</small>
            <Icon.MappingIn className="icon-size-64"/>
          </div>
        </div>
      )
    })
  )
  
