import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Icon from '../../indigo/components/Icon';

const icons = [
  'applications',
  'arrow-down',
  'arrow-vertical',
  'calendar',
  'check',
  'cloud',
  'cloud-download',
  'copy',
  'duration',
  'edit',
  'danger',
  'extractor',
  'extractor-to',
  'help',
  'jobs',
  'keboola',
  'mapping-in',
  'mapping-out',
  'minus',
  'notification',
  'options',
  'orchestration',
  'overview',
  'plus',
  'refresh',
  'reset',
  'run',
  'sandbox',
  'search',
  'sql-dep',
  'storage',
  'support-by',
  'support-chat',
  'switch-off',
  'switch-on',
  'times',
  'transformation',
  'transformation-2',
  'transformation-overview',
  'trash',
  'user',
  'warning',
  'writer',
];

storiesOf('Icons', module)
  .add(
    'Icon gallery',
    withInfo({
      text: `
            Set of Keboola SVG icons. Color can be changed by css 'color' property. When adding new icons to src/icons, you need to re-run svg compilation.
        `,
      inline: true,
    })(() => {
      return (
        <div className="indigo-layout-grid">
          {icons.map(function(icon) {
            return (
              <div key={icon}>
                <Icon iconClass={icon} />
              </div>
            );
          })}
        </div>
      );
    })
  )
  .add(
    'Icon sizing',
    withInfo({
      text: `
        Description
        `,
      inline: true,
    })(() => {
      return (
        <div>
          <Icon iconClass="mapping-out" className="icon-size-stack" />
          <br />
          <Icon iconClass="mapping-in" className="icon-size-stack" />
          <br />
          <Icon iconClass="extractor-to" className="icon-size-stack" />
          <br />
          <Icon iconClass="transformation-2" className="icon-size-stack" />

          <br />
          <br />
          <br />

          <Icon iconClass="keboola" className="icon-size-20" />
          <Icon iconClass="keboola" className="icon-size-32" />
          <Icon iconClass="keboola" className="icon-size-48" />
          <Icon iconClass="keboola" className="icon-size-64" />
        </div>
      );
    })
  );
