import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import IconApplications from '../../indigo/components/icons/Applications'
import IconArrowDown from '../../indigo/components/icons/ArrowDown'
import IconArrowVertical from '../../indigo/components/icons/ArrowVertical'
import IconCalendar from '../../indigo/components/icons/Calendar'
import IconCheck from '../../indigo/components/icons/Check'
import IconCloudDownload from '../../indigo/components/icons/CloudDownload'
import IconCloud from '../../indigo/components/icons/Cloud'
import IconCopy from '../../indigo/components/icons/Copy'
import IconDanger from '../../indigo/components/icons/Danger'
import IconDuration from '../../indigo/components/icons/Duration'
import IconEdit from '../../indigo/components/icons/Edit'
import IconError from '../../indigo/components/icons/Error'
import IconExtractor from '../../indigo/components/icons/Extractor'
import IconExtractorTo from '../../indigo/components/icons/ExtractorTo'
import IconHelp from '../../indigo/components/icons/Help'
import IconJobs from '../../indigo/components/icons/Jobs'
import IconKeboola from '../../indigo/components/icons/Keboola'
import IconMappingIn from '../../indigo/components/icons/MappingIn'
import IconMappingOut from '../../indigo/components/icons/MappingOut'
import IconMinus from '../../indigo/components/icons/Minus'
import IconNotification from '../../indigo/components/icons/Notification'
import IconOptions from '../../indigo/components/icons/Options'
import IconOrchestration from '../../indigo/components/icons/Orchestration'
import IconOverview from '../../indigo/components/icons/Overview'
import IconPlus from '../../indigo/components/icons/Plus'
import IconRefresh from '../../indigo/components/icons/Refresh'
import IconReset from '../../indigo/components/icons/Reset'
import IconRun from '../../indigo/components/icons/Run'
import IconSandbox from '../../indigo/components/icons/Sandbox'
import IconSearch from '../../indigo/components/icons/Search'
import IconSqlDep from '../../indigo/components/icons/SqlDep'
import IconStorage from '../../indigo/components/icons/Storage'
import IconSupportBy from '../../indigo/components/icons/SupportBy'
import IconSupportChat from '../../indigo/components/icons/SupportChat'
import IconSwitchOff from '../../indigo/components/icons/SwitchOff'
import IconSwitchOn from '../../indigo/components/icons/SwitchOn'
import IconTimes from '../../indigo/components/icons/Times'
import IconTransformation2 from '../../indigo/components/icons/Transformation_2'
import IconTransformation from '../../indigo/components/icons/Transformation'
import IconTransformationOverview from '../../indigo/components/icons/TransformationOverview'
import IconTrash from '../../indigo/components/icons/Trash'
import IconUser from '../../indigo/components/icons/User'
import IconWarning from '../../indigo/components/icons/Warning'
import IconWriter from '../../indigo/components/icons/Writer'

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
          <div><IconApplications /></div>
          <div><IconArrowDown /></div>
          <div><IconArrowVertical /></div>
          <div><IconCalendar /></div>
          <div><IconCheck /></div>
          <div><IconCloudDownload /></div>
          <div><IconCloud /></div>
          <div><IconCopy /></div>
          <div><IconDanger /></div>
          <div><IconDuration /></div>
          <div><IconEdit /></div>
          <div><IconError /></div>
          <div><IconExtractor /></div>
          <div><IconExtractorTo /></div>
          <div><IconHelp /></div>
          <div><IconJobs /></div>
          <div><IconKeboola /></div>
          <div><IconMappingIn /></div>
          <div><IconMappingOut /></div>
          <div><IconMinus /></div>
          <div><IconNotification /></div>
          <div><IconOptions /></div>
          <div><IconOrchestration /></div>
          <div><IconOverview /></div>
          <div><IconPlus /></div>
          <div><IconRefresh /></div>
          <div><IconReset /></div>
          <div><IconRun /></div>
          <div><IconSandbox /></div>
          <div><IconSearch /></div>
          <div><IconSqlDep /></div>
          <div><IconStorage /></div>
          <div><IconSupportBy /></div>
          <div><IconSupportChat /></div>
          <div><IconSwitchOff /></div>
          <div><IconSwitchOn /></div>
          <div><IconTimes /></div>
          <div><IconTransformation2 /></div>
          <div><IconTransformation /></div>
          <div><IconTransformationOverview /></div>
          <div><IconTrash /></div>
          <div><IconUser /></div>
          <div><IconWarning /></div>
          <div><IconWriter /></div>
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
          <IconMappingOut className="icon-size-stack" />
          <br />
          <IconMappingIn className="icon-size-stack" />
          <br />
          <IconExtractorTo className="icon-size-stack" />
          <br />
          <IconTransformation2 className="icon-size-stack" />

          <br />
          <br />
          <br />

          <IconKeboola className="icon-size-20" />
          <IconKeboola className="icon-size-32" />
          <IconKeboola className="icon-size-48" />
          <IconKeboola className="icon-size-64" />
        </div>
      );
    })
  );
