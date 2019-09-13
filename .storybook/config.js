import { configure, addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming/create';

// Load all components, so we can lint them. Do not remove.
import components from '../src/indigo/components';

function loadStories() {
  require('../src/stories/Bootstrap');
  require('../src/stories/Check');
  require('../src/stories/Loader');
  require('../src/stories/NewLinToBr');
  require('../src/stories/Protected');
  require('../src/stories/RefreshIcon');
  require('../src/stories/Tree');
  require('../src/stories/ModalConfiguration');
  require('../src/stories/BtnLinkInline');
  require('../src/stories/ExternalLink');
  require('../src/stories/PanelWithDetails');
  require('../src/stories/SearchBar');
  require('../src/stories/Finished');
  require('../src/stories/InlineEditInput');
  require('../src/stories/Duration');
  require('../src/stories/StatusCircle');
  require('../src/stories/ConfirmButtons');
}

addParameters({
  options: {
    hierarchyRootSeparator: null,
    hierarchySeparator: null,
    theme: create({
      brandTitle: 'Indigo UI',
      brandUrl: 'https://github.com/keboola/indigo-ui',
    }),
  },
});

addDecorator(withInfo({ inline: true }));
addDecorator(withKnobs);

configure(loadStories, module);
