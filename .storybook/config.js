/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  require('../src/stories/Button');
  require('../src/stories/Image');
  require('../src/stories/TimeLabel');
  require('../src/stories/Test');
  require('../src/stories/Bootstrap');
}

setAddon(infoAddon);
addDecorator(withKnobs);

configure(loadStories, module);
