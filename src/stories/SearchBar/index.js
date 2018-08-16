import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import SearchBar from '../../indigo/components/SearchBar';


storiesOf('SearchBar', module)
  .add(
    'Styles',
    withInfo({
      text: `
        Warnings & Errors
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar
          className="row kbc-search-row"
        />
      );
    })
  );
