import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Button} from 'react-bootstrap';
import {Icon} from '../../indigo/components';

import SearchBar from '../../indigo/components/SearchBar';


const demoContent = (
  <Button bsStyle="default">
    <Icon.Help className={'icon-size-20'}/> Demo Button
  </Button>
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
        usage: config rows, config detail
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar actions={demoContent}/>
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
        <SearchBar
          placeholder="Search by component name, desription or id"
        />
      );
    })
  )
  .add(
    'Select project',
    withInfo({
      text: `
        to be done
        `,
      inline: true,
    })(() => {
      return (
        <ul className="list-unstyled">
          <li className="dropdown-header kb-nav-search kbc-search">
            <span className="kbc-icon-search"></span>
            <input className="form-control" placeholder="Search your projects" value=""/>
          </li>
        </ul>
      );
    })
  );
