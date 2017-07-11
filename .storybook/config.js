/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

function loadStories() {
  require('../src/stories/Button');
  require('../src/stories/Image');
  require('../src/stories/TimeLabel');
  require('../src/stories/Checkbox');
  require('../src/stories/Avatar');
  require('../src/stories/ComponentDescription');
  require('../src/stories/Notification');
  require('../src/stories/Table');
  require('../src/stories/List');
  require('../src/stories/Radio');
  require('../src/stories/Tabs');
  require('../src/stories/StatusLabel');
}

setAddon(infoAddon);

configure(loadStories, module);
