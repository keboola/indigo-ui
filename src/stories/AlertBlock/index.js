import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import { Icon } from '../../indigo/components';
import { Row, Col } from 'react-bootstrap';

import AlertBlock from '../../indigo/components/AlertBlock';

let content1 = (
  <ul className="list-unstyled list-no-padding">
    <li>
      <a>
          Keboola Connection Storage (13.24 GB of 10 GB)
      </a>
    </li>
  </ul>
)

let content2 = (
  <ul className="list-unstyled list-no-padding">
    <li>
      <a>
          Keboola Connection Storage (13.24 GB of 10 GB)
      </a>
    </li>
    <li>
      <a>
          Users count (12 of 10)
      </a>
    </li>
  </ul>
)

let content3 = (
  <Row>
    <Col md={6}>
      <h4>
        <Icon.Writer className="icon-category"/>
        <span>Writers</span>
      </h4>
      <ul className="list-unstyled">
        <li>
          <a>
            Custom science PHP
          </a>
        </li>
        <li>
          <a>
            Custom science Python (v2.x)
          </a>
        </li>
      </ul>
      <h4>
        <Icon.Application className="icon-category"/>
        <span>Application</span>
      </h4>
      <ul className="list-unstyled">
        <li>
          <a>
            Gooddata (deprecated)
          </a>
        </li>
        <li>
          <a>
            Pigeon
          </a>
        </li>
        <li>
          <a>
            Pigeon Importer (Deprecated)
          </a>
        </li>
      </ul>
    </Col>
    <Col md={6}>
      <h4>
        <Icon.Extractor className="icon-category"/>
        <span>Extractors</span>
      </h4>
      <ul className="list-unstyled">
        <li>
          <a>
            Gooddata (deprecated)
          </a>
        </li>
        <li>
          <a>
            Pigeon
          </a>
        </li>
        <li>
          <a>
            Pigeon Importer (Deprecated)
          </a>
        </li>
      </ul>
      <h4>
       <Icon.Transformation className="icon-category"/>
        Part 1
      </h4>
      <ul className="list-unstyled">
        <li>
          <a>rwe</a>
        </li>
      </ul>
      <h4>
        <Icon.Transformation className="icon-category"/>
        Part 2
      </h4>
      <ul className="list-unstyled">
        <li>
          <a>sadfas</a>
        </li>
      </ul>
    </Col>
  </Row>
)

let content4 = (
  <Col>
    <Row>
      <Col md={12}>
        <p>Learn more about the deprecation <a>timeline and reasons</a>.</p>
      </Col>
    </Row>
      {content3}
  </Col>
)

let content5 = (
  <Row>
    <Col md={9}>
      <p>
          Migrate your current configurations to new Database Writer. This writer will continue to work until May 2017. Then, all your configurations will be migrated automatically. The migration will also alter your orchestrations to use the new writers. The old configurations will remain intact for now. You can remove them yourself after a successful migration.
      </p>
      <button className="btn btn-primary">
        Proceed to Migration
      </button>
    </Col>
  </Row>
)



storiesOf('AlertBlock', module)
  .add(
    'Styles',
    withInfo({
      text: `
        Warnings & Errors
        `,
      inline: true,
    })(() => {
      return (
        <div>
          <AlertBlock
            type="warning"
            title="Project contains deprecated components">
            {content1}
          </AlertBlock>

          <AlertBlock
            type="danger"
            title="Project is over quota">
            {content1}
          </AlertBlock>
        </div>
      );
    })
  ).add(
  'Recommended contents',
  withInfo({
    text: `
        Here are show receomended usages of content, please respect them. 
        If you are missing other demo content, please get in touch with UX crowd .)
        `,
    inline: true,
  })(() => {
    return (
      <div>
        <AlertBlock
          type="warning"
          title="Alert Block with list content">
          {content2}
        </AlertBlock>

        <AlertBlock
          type="warning"
          title="Alert Block with categorized list content">
          {content3}
        </AlertBlock>

        <AlertBlock
          type="warning"
          title="Alert Block with categorized list content & description">
          {content4}
        </AlertBlock>

        <AlertBlock
          type="warning"
          title="Alert Block with paragraph & action">
          {content5}
        </AlertBlock>
      </div>
    );
  })
);
