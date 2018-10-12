import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

// Load all components, so we can lint them. Do not remove.
import components from '../src/indigo/components';

function loadStories() {
  require('../src/stories/Bootstrap');
  require('../src/stories/Sample');
  require('../src/stories/Check');
  require('../src/stories/Loader');
  require('../src/stories/NewLinToBr');
  require('../src/stories/Protected');
  require('../src/stories/RefreshIcon');
  require('../src/stories/Tree');
  require('../src/stories/Tabs');
  require('../src/stories/Popover');
  require('../src/stories/RegionSelector');
  require('../src/stories/ModalConfiguration');
  require('../src/stories/ExternalLink');
  require('../src/stories/PanelWithDetails');
  require('../src/stories/AlertBlock');
  require('../src/stories/Icons');
  require('../src/stories/Splash');
  require('../src/stories/SearchBar');
}

setOptions({
  name: 'Indigo UI',
  url: 'https://github.com/keboola/indigo-ui',
});

setAddon(infoAddon);
addDecorator(withKnobs);

configure(loadStories, module);
