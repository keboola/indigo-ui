import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

function loadStories() {
  require('../src/stories/Image');
  require('../src/stories/TimeLabel');
  require('../src/stories/Test');
  require('../src/stories/Bootstrap');
  require('../src/stories/Sample');
}

setAddon(infoAddon);
addDecorator(withKnobs);

configure(loadStories, module);
