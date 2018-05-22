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
import IconTransformation2 from '../../indigo/components/icons/Transformation2'
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
          <div><IconApplications className="icon" /></div>
          <div><IconArrowDown className="icon" /></div>
          <div><IconArrowVertical className="icon" /></div>
          <div><IconCalendar className="icon" /></div>
          <div><IconCheck className="icon" /></div>
          <div><IconCloudDownload className="icon" /></div>
          <div><IconCloud className="icon" /></div>
          <div><IconCopy className="icon" /></div>
          <div><IconDanger className="icon" /></div>
          <div><IconDuration className="icon" /></div>
          <div><IconEdit className="icon" /></div>
          <div><IconError className="icon" /></div>
          <div><IconExtractor className="icon" /></div>
          <div><IconExtractorTo className="icon" /></div>
          <div><IconHelp className="icon" /></div>
          <div><IconJobs className="icon" /></div>
          <div><IconKeboola className="icon" /></div>
          <div><IconMappingIn className="icon" /></div>
          <div><IconMappingOut className="icon" /></div>
          <div><IconMinus className="icon" /></div>
          <div><IconNotification className="icon" /></div>
          <div><IconOptions className="icon" /></div>
          <div><IconOrchestration className="icon" /></div>
          <div><IconOverview className="icon" /></div>
          <div><IconPlus className="icon" /></div>
          <div><IconRefresh className="icon" /></div>
          <div><IconReset className="icon" /></div>
          <div><IconRun className="icon" /></div>
          <div><IconSandbox className="icon" /></div>
          <div><IconSearch className="icon" /></div>
          <div><IconSqlDep className="icon" /></div>
          <div><IconStorage className="icon" /></div>
          <div><IconSupportBy className="icon" /></div>
          <div><IconSupportChat className="icon" /></div>
          <div><IconSwitchOff className="icon" /></div>
          <div><IconSwitchOn className="icon" /></div>
          <div><IconTimes className="icon" /></div>
          <div><IconTransformation2 className="icon" /></div>
          <div><IconTransformation className="icon" /></div>
          <div><IconTransformationOverview className="icon" /></div>
          <div><IconTrash className="icon" /></div>
          <div><IconUser className="icon" /></div>
          <div><IconWarning className="icon" /></div>
          <div><IconWriter className="icon" /></div>
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
          <IconMappingOut className="icon icon-size-stack" />
          <br />
          <IconMappingIn className="icon icon-size-stack" />
          <br />
          <IconExtractorTo className="icon icon-size-stack" />
          <br />
          <IconTransformation2 className="icon icon-size-stack" />

          <br />
          <br />
          <br />

          <IconKeboola className="icon icon-size-20" />
          <IconKeboola className="icon icon-size-32" />
          <IconKeboola className="icon icon-size-48" />
          <IconKeboola className="icon icon-size-64" />
        </div>
      );
    })
  );
