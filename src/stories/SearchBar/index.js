import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Button} from 'react-bootstrap';
import {action} from '@storybook/addon-actions';

import SearchBar from '../../indigo/components/SearchBar';

const demoAdditionalActions = [
  <Button key="button-default">
    Demo Button
  </Button>,
  <Button bsStyle="primary" key="button-primary">
    Demo Button
  </Button>
]

storiesOf('SearchBar', module)
  .add(
    'Basic usage',
    withInfo({
      inline: true,
    })(() => {
      return (
        <SearchBar/>
      );
    })
  )
  .add(
    'Searchbar with actions',
    withInfo({
      text: `
        Single action element can be passed as object. <br>
        Multiple additional action elements needs to be passed in array.
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar additionalActions={demoAdditionalActions} />
      );
    })
  )
  
  .add(
    'Custom placeholder',
    withInfo({
      inline: true,
    })(() => {
      return (
        <SearchBar placeholder="Search by component name, desription or id"/>
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
        <SearchBar
          onChange={action('changed content')}
          onSubmit={action('submitted')}
          onKeyDown={action('keydown')}
        />
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
        <SearchBar theme="inverse"/>
      );
    })
  );
