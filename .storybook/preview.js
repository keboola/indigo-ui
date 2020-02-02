import { addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming/create';

// Load all components, so we can lint them. Do not remove.
import components from '../src/indigo/components';

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
