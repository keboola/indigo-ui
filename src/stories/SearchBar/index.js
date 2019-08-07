import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchBar from '../../indigo/components/SearchBar';
import BasicUsage from './examples/BasicUsage';
import WithButtons from './examples/WithButtons';
import Events from './examples/Events';
import WithRef from './examples/WithRef';
import AutoSubmitOnClear from './examples/AutoSubmitOnClear';
import WithExternalButtons from './examples/WithExternalButtons';

storiesOf('SearchBar', module)
  .add('Minimal', () => {
    return <SearchBar onChange={() => null} query="Test" />;
  })
  .add('Custom placeholder', () => {
    return (
      <SearchBar placeholder="Search by component name, description or id" onChange={() => null} />
    );
  })
  .add(
    'Dark theme',
    () => {
      return <SearchBar theme="inverse" onChange={() => null} />;
    },
    { info: { text: 'inverse theme for sidebar' } }
  )
  .add('Basic usage', () => {
    return <BasicUsage />;
  })
  .add(
    'SearchBar with buttons',
    () => {
      return <WithButtons />;
    },
    {
      info: {
        text:
          'Single action element can be passed as object. Multiple additional action elements needs to be passed in array.',
      },
    }
  )
  .add(
    'Events demo',
    () => {
      return <Events />;
    },
    { info: { text: 'onChange & onSubmit & onKeyDown demo' } }
  )
  .add(
    'Callback Refs',
    () => {
      return <WithRef />;
    },
    { info: { text: 'Passing inputRef' } }
  )
  .add(
    'SearchBar with autosubmit on clear',
    () => {
      return <AutoSubmitOnClear />;
    },
    { info: { text: 'onSubmit is called after clear' } }
  )
  .add(
    'SearchBar with predefined searches',
    () => {
      return <WithExternalButtons />;
    },
    { info: { text: 'SearchBar value can be modified via query prop' } }
  );
