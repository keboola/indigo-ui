/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

function loadStories() {
  require('../src/stories/List');
  require('../src/stories/Table');
  require('../src/stories/Tabs');
  require('../src/stories/Collapsible');
  require('../src/stories/DetailRightPanel');
  require('../src/stories/ComponentDescription');
  require('../src/stories/Notification');
  require('../src/stories/Breadcrumbs');
  require('../src/stories/Loader');
  require('../src/stories/SearchBar');
  require('../src/stories/TimeLabel');
  require('../src/stories/Form');
  require('../src/stories/Button');
  require('../src/stories/Input');
  require('../src/stories/Checkbox');
  require('../src/stories/Radio');
  require('../src/stories/Select');
  require('../src/stories/Datepicker');
  require('../src/stories/Hint');
  require('../src/stories/StatusLabel');
  require('../src/stories/Modal')
  require('../src/stories/Scrollbar');
  require('../src/stories/Image');
  require('../src/stories/Icons')
  require('../src/stories/KbcReactComponents')
  require('../src/stories/OverviewComponent')
  require('../src/stories/CID')
  require('../src/stories/EditingMode')
  require('../src/stories/CopyClipboard')

  // require('../src/stories/Guidelines');
}

setAddon(infoAddon);

configure(loadStories, module);
