import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';
import {Button, FormControl} from 'react-bootstrap';
import {action} from '@storybook/addon-actions';

import SearchBar from '../../indigo/components/SearchBar';

const demoAdditionalActions = [
  <Button key="button-default">
    Demo Button
  </Button>,
  <Button bsStyle="primary" key="button-primary">
    Demo Button
  </Button>
];

const demoRecomendedRoutes = [
  <a>
    Demo Link Lorem Ipsum
  </a>,
  <a>
    Demo Link Lorem Ipsum
  </a>
];

class ExampleWithRef extends React.Component {
  constructor(props) {
    super(props);
    this.fillSecondInput = this.fillSecondInput.bind(this);
    this.setSecondValue = this.setSecondValue.bind(this);
    this.state = {
      secondValue: '',
    };
    this.searchInput = null;
  }

  fillSecondInput() {
    action('submitted')();
    if (this.searchInput) {
      this.setSecondValue(this.searchInput.value);
    }
  }

  setSecondValue(value) {
    this.setState({
      secondValue: value
    });
  }

  render() {
    return (
      <div>
        <SearchBar
          onSubmit={this.fillSecondInput}
          inputRef={(element) => {
            this.searchInput = element;
          }}
        />
        <div>
          Submit input above (with Enter) and value will be propagated to input bellow.
        </div>
        <FormControl
          type="text"
          value={this.state.secondValue}
          onChange={(event) => {
            this.setSecondValue(event.target.value)
          }}
        />
      </div>
    );
  }
}

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
        Single action element can be passed as object. Multiple additional action elements needs to be passed in array.
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar additionalActions={demoAdditionalActions} />
      );
    })
  )
  
  .add(
    'Recommended Searches',
    withInfo({
      text: `
        Option for add recommended searches links
        `,
      inline: true,
    })(() => {
      return (
        <SearchBar recommendedSearches={demoRecomendedRoutes}/>
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
    'Callback Refs',
    withInfo({
      text: `
        Passing inputRef
        `,
      inline: true,
    })(() => {
      return (
        <ExampleWithRef />
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
