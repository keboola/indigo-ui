import React from 'react';
import { addParameters, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';
import { create } from '@storybook/theming/create';

addParameters({
  options: {
    theme: create({
      brandTitle: 'Indigo UI',
      brandUrl: 'https://github.com/keboola/indigo-ui',
    }),
  },
});

addDecorator(withInfo({ inline: true }));
addDecorator(withKnobs);
addDecorator((storyFn) => <div className="container">{storyFn()}</div>);
