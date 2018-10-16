import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { Icon } from '../../indigo/components';

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
          <div><Icon.Application /></div>
          <div><Icon.ArrowDown /></div>
          <div><Icon.ArrowVertical /></div>
          <div><Icon.Calendar /></div>
          <div><Icon.Check /></div>
          <div><Icon.CloudDownload /></div>
          <div><Icon.Cloud /></div>
          <div><Icon.Copy /></div>
          <div><Icon.Danger /></div>
          <div><Icon.DragHandle /></div>
          <div><Icon.Duration /></div>
          <div><Icon.Edit /></div>
          <div><Icon.Error /></div>
          <div><Icon.Extractor /></div>
          <div><Icon.ExtractorTo /></div>
          <div><Icon.Help /></div>
          <div><Icon.Jobs /></div>
          <div><Icon.Keboola /></div>
          <div><Icon.MappingIn /></div>
          <div><Icon.MappingOut /></div>
          <div><Icon.Minus /></div>
          <div><Icon.Notification /></div>
          <div><Icon.Options /></div>
          <div><Icon.Orchestration /></div>
          <div><Icon.Overview /></div>
          <div><Icon.Plus /></div>
          <div><Icon.Refresh /></div>
          <div><Icon.Reset /></div>
          <div><Icon.Run /></div>
          <div><Icon.Sandbox /></div>
          <div><Icon.Search /></div>
          <div><Icon.SqlDep /></div>
          <div><Icon.Storage /></div>
          <div><Icon.SupportBy /></div>
          <div><Icon.SupportChat /></div>
          <div><Icon.SwitchOff /></div>
          <div><Icon.SwitchOn /></div>
          <div><Icon.Times /></div>
          <div><Icon.TransformationAlt /></div>
          <div><Icon.Transformation /></div>
          <div><Icon.TransformationOverview /></div>
          <div><Icon.Trash /></div>
          <div><Icon.User /></div>
          <div><Icon.Warning /></div>
          <div><Icon.Writer /></div>
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
          <Icon.MappingOut className="icon-size-stack" />
          <br />
          <Icon.MappingIn className="icon-size-stack" />
          <br />
          <Icon.ExtractorTo className="icon-size-stack" />
          <br />
          <Icon.TransformationAlt className="icon-size-stack" />

          <br />
          <br />
          <br />

          <Icon.Keboola className="icon-size-20" />
          <Icon.Keboola className="icon-size-32" />
          <Icon.Keboola className="icon-size-48" />
          <Icon.Keboola className="icon-size-64" />
        </div>
      );
    })
  );
