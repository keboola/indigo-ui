/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

function loadStories() {
  require('../src/stories/Button');
  require('../src/stories/Checkbox');
  require('../src/stories/Radio');
  require('../src/stories/List');
  require('../src/stories/Table');
  require('../src/stories/TimeLabel');
  require('../src/stories/Tabs');
  require('../src/stories/SearchBar');
  require('../src/stories/Modal');
  require('../src/stories/StatusLabel');
  require('../src/stories/Icons')
  require('../src/stories/ComponentDescription');
  require('../src/stories/Notification');
  require('../src/stories/Image');
  require('../src/stories/Select');
  require('../src/stories/Datepicker');
  require('../src/stories/Loader');
  require('../src/stories/Collapsible');
  require('../src/stories/Tooltip');
  require('../src/stories/Input');
  // require('../src/stories/Forms');
  // require('../src/stories/Typography');
  // require('../src/stories/Guidelines');
}

setAddon(infoAddon);

configure(loadStories, module);
