import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// Load all components, so we can lint them. Do not remove.
import components from '../src/indigo/components';

function loadStories() {
  require('../src/stories/Bootstrap');
  require('../src/stories/Sample');
}

setAddon(infoAddon);
addDecorator(withKnobs);

configure(loadStories, module);
