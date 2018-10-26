import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import SearchBar from '../../indigo/components/SearchBar';

import BasicUsage from "./examples/BasicUsage";
import WithButtons from "./examples/WithButtons";
import Events from "./examples/Events";
import WithRef from "./examples/WithRef";
import AutoSubmitOnClear from "./examples/AutoSubmitOnClear";
import WithExternalButtons from "./examples/WithExternalButtons";


storiesOf('SearchBar', module)
  .add(
    'Minimal',
    withInfo({
      inline: true,
    })(() => {
      return (
        <SearchBar onChange={()=>null} query="Test"/>
      );
    })
  )
  .add(
    'Custom placeholder',
    withInfo({
      inline: true,
    })(() => {
      return (
        <SearchBar placeholder="Search by component name, description or id" onChange={()=>null} />
      );
    })
  )
  .add(
    'Dark theme',
    withInfo({
      text: `
        inverse theme for sidebar
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar theme="inverse" onChange={()=>null}/>
      );
    })
  )
  .add(
    'Basic usage',
    withInfo({
      inline: true,
    })(() => {
      return (
        <BasicUsage />
      );
    })
  )
  .add(
    'SearchBar with buttons',
    withInfo({
      text: `
        Single action element can be passed as object. Multiple additional action elements needs to be passed in array.
        `,
      inline: true,
    })(() => {
      return (
        <WithButtons />
      );
    })
  )
  .add(
    'Events demo',
    withInfo({
      text: `
        onChange & onSubmit & onKeyDown demo
        `,
      inline: true,
    })(() => {
      return (
        <Events />
      );
    })
  )
  .add(
    'Callback Refs',
    withInfo({
      text: `
        Passing inputRef
        `,
      inline: true,
    })(() => {
      return (
        <WithRef />
      );
    })
  )
  .add(
    'SearchBar with autosubmit on clear',
    withInfo({
      text: `
        onSubmit is called after clear
        `,
      inline: true,
    })(() => {
      return (
        <AutoSubmitOnClear />
      );
    })
  )
  .add(
    'SearchBar with predefined searches',
    withInfo({
      text: `
        SearchBar value can be modified via query prop
        `,
      inline: true,
    })(() => {
      return (
        <WithExternalButtons />
      );
    })
  );
