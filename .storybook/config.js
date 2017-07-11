/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

function loadStories() {
  require('../src/stories/Button');
  require('../src/stories/Image');
  require('../src/stories/TimeLabel');
  require('../src/stories/Checkbox');
}

setAddon(infoAddon);

configure(loadStories, module);
