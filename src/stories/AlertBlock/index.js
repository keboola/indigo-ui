import React from 'react';
import { storiesOf } from '@storybook/react';
import AlertBlock from '../../indigo/components/AlertBlock';

const content1 = (
  <ul className="list-unstyled">
    <li>
      <a>Keboola Connection - Orchestrations count (39 of 10)</a>
    </li>
  </ul>
);
const content2 = (
  <div className="row">
    <div className="col-md-6">
      <h4>
        <span className="kbc-writer-icon" />
        <span>Writers</span>
      </h4>
      <ul className="list-unstyled">
        <li>
          <a>Custom science PHP</a>
        </li>
        <li>
          <a>Custom science Python (v2.x)</a>
        </li>
      </ul>
    </div>
    <div className="col-md-6">
      <h4>
        <span className="kbc-extractor-icon" />
        <span>Extractor</span>
        <span>s</span>
      </h4>
      <ul className="list-unstyled">
        <li>
          <a>Gooddata (deprecated)</a>
        </li>
        <li>
          <a>Pigeon</a>
        </li>
        <li>
          <a>Pigeon Importer (Deprecated)</a>
        </li>
      </ul>
    </div>
  </div>
);
const content3 = (
  <div>
    <div className="row">
      <div className="col-md-12">
        <p>
          Learn more about the deprecation <a>timeline and reasons</a>.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <h4>
          <span className="kbc-transformation-icon" />
          ew
        </h4>
        <ul className="list-unstyled">
          <li>
            <a>rwe</a>
          </li>
        </ul>
        <h4>
          <span className="kbc-transformation-icon" />
          Part 1
        </h4>
        <ul className="list-unstyled">
          <li>
            <a>sadfas</a>
          </li>
        </ul>
      </div>
      <div className="col-md-6">
        <h4>
          <span className="kbc-transformation-icon" />
          fasdfas
        </h4>
        <ul className="list-unstyled">
          <li>
            <a>Main</a>
          </li>
          <li>
            <a>Main 2</a>
          </li>
          <li>
            <a>Main 3</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const content4 = (
  <div className="row">
    <div className="col-md-9">
      <span>
        <p>
          Migrate your current configurations to new Database Writer. This writer will continue to
          work until May 2017. Then, all your configurations will be migrated automatically. The
          migration will also alter your orchestrations to use the new writers. The old
          configurations will remain intact for now. You can remove them yourself after a successful
          migration.
        </p>
      </span>
      <button className="btn btn-primary">Proceed to Migration</button>
    </div>
  </div>
);

storiesOf('AlertBlock', module)
  .add(
    'Styles',
    () => {
      return (
        <div>
          <AlertBlock type="warning" title="Project contains deprecated components">
            {content1}
          </AlertBlock>

          <AlertBlock type="danger" title="Project is over quota">
            {content1}
          </AlertBlock>
        </div>
      );
    },
    { info: { text: 'Warnings & Errors' } }
  )
  .add(
    'Recommended contents',
    () => {
      return (
        <div>
          <AlertBlock type="warning" title="Alert Block Heading with link content">
            {content1}
          </AlertBlock>

          <AlertBlock type="warning" title="Alert Block Heading with list content">
            {content2}
          </AlertBlock>

          <AlertBlock type="warning" title="Alert Block Heading with list content & description">
            {content3}
          </AlertBlock>

          <AlertBlock type="warning" title="Alert Block Heading with text paragraph & action">
            {content4}
          </AlertBlock>
        </div>
      );
    },
    {
      info: {
        text: `
      Here are show receomended usages of content, please respect them.
      If you are missing other demo content, please get in touch with UX crowd .)
    `,
      },
    }
  );
