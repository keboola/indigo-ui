import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('SearchBar')
  .addWithInfo(
    'default',
    'Desc',
    () => (
        <form className="kbc-search row kbc-search-row">
            <span className="kbc-icon-search"></span>
            <input type="text" value="" className="form-control" placeholder="Search"/>
        </form>
    ),
      {
          inline: true,
      }
  )
;
