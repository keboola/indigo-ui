import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Panel, Button, Form, FormGroup, FormControl, ControlLabel, Col, Label} from 'react-bootstrap';


const headerContent = (
  <a aria-expanded="false" aria-selected="false" className="collapsed">
    <span className="table" style={{wordBreak: "break-word;"}}>
      <span className="tbody">
        <span className="tr">
          <span className="td col-xs-3">
            <Label bsStyle="primary">
              <span>1.02 kB</span>
            </Label>
          </span>
            <span className="td col-xs-4">
              in.c-csv-import.407799760
            </span>
            <span className="td col-xs-1">
              <span className="fa fa-chevron-right fa-fw"/>
            </span>
          <span className="td col-xs-3">
            <span className="fa fa-file-text-o fa-fw" title="File"></span>
            <span>in/tables/407799760.csv</span>
          </span>
          <span className="td col-xs-1 text-right kbc-no-wrap">
            <Button bsStyle="link">
              <i className="fa kbc-icon-cup"></i>
              <span></span>
            </Button>
            <Button bsStyle="link">
              <span className="fa fa-pencil"></span>
            </Button>
        </span>
        </span>
      </span>
    </span>
  </a>
)

storiesOf('MappingDetail', module)
  .add(
    'Basic init',
    withInfo({
      text: `dummy`,
      inline: true,
    })(() => {
      return (
        <div className="mapping">
          <h2><span>Input Mapping</span>
            <span className="pull-right add-mapping-button">
              <span>
                  <Button bsStyle="success">
                    <i className="kbc-icon-plus"></i>New Input
                  </Button>
              </span>
            </span>
          </h2>
          <div className="mapping-rows">
            <Panel
              header={headerContent}
              className="kbc-panel-heading-with-table"
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
    
