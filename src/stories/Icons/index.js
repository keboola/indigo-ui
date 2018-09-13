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
          <div><Icon.Transformation_2 /></div>
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
          <p>
            <Icon.Keboola className="icon-size-12"/>
            <Icon.Keboola className="icon-size-14"/>
            <Icon.Keboola className="icon-size-16"/>
            <Icon.Keboola className="icon-size-20"/>
            <Icon.Keboola className="icon-size-32"/>
            <Icon.Keboola className="icon-size-48"/>
            <Icon.Keboola className="icon-size-64"/>
            <Icon.Keboola className="icon-size-120"/>
            <Icon.Keboola className="icon-size-180"/>
            <Icon.Keboola className="icon-size-240"/>
          </p>
          <p>
            <Icon.Search className="icon-size-12"/>
            <Icon.Search className="icon-size-14"/>
            <Icon.Search className="icon-size-16"/>
            <Icon.Search className="icon-size-20"/>
            <Icon.Search className="icon-size-32"/>
            <Icon.Search className="icon-size-48"/>
            <Icon.Search className="icon-size-64"/>
            <Icon.Search className="icon-size-120"/>
            <Icon.Search className="icon-size-180"/>
            <Icon.Search className="icon-size-240"/>
          </p>
          <p>
            <Icon.Search className="icon-size-block"/>
          </p>
          <p>
            Lorem MIDDLE dolor <Icon.Search className="icon-size-14"/> sit amet, MIDDLE adipisicing <Icon.Keboola
            className="icon-size-64"/> elit. MIDDLE libero magni modi quos, sapiente vitae MIDDLE voluptatibus? Aliquam
            enim nostrum MIDDLE? A dolorum MIDDLE hic odit officia MIDDLE quidem sed.
          </p>
          <p>
          </p>
          <p>
            Lorem BASE dolor <Icon.Search className="icon-size-14 icon-align-base"/> sit BASE, <Icon.Keboola
            className="icon-size-24 icon-align-base"/> consectetur BASE <Icon.Keboola
            className="icon-size-64 icon-align-base "/> elit. Dolorum libero BASE modi quos, sapiente vitae voluptate
            BASE? Aliquam enim nostrum BASE? A dolorum earum hic odit BASE perferendis quidem sed.
          </p>
        </div>
      );
    })
  );
