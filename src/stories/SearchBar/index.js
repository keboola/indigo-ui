import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Button} from 'react-bootstrap';
import {action} from '@storybook/addon-actions';

import SearchBar from '../../indigo/components/SearchBar';


const demoContent = (
  <div className="searchbar-actions">
    <Button>
      Demo Button
    </Button>
    <Button bsStyle="primary">
      Demo Button
    </Button>
  </div>
)
storiesOf('SearchBar', module)
  .add(
    'Basic usage',
    withInfo({
      text: `
        usage: ex, tr, wr, orch, versions
        `,
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
        additional actions element needs to be wrapped in <div className="searchbar-actions">
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar additionalActions={demoContent}/>
      );
    })
  )
  
  .add(
    'Custom placeholder',
    withInfo({
      text: `
        usage: ex, tr, wr, orch, versions
        `,
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
        to be done
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar className="searchbar-inverse"/>
      );
    })
  );
