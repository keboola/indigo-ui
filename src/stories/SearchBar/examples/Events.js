import React from 'react';
import SearchBar from "../../../indigo/components/SearchBar";
import {action} from "@storybook/addon-actions";

export default class BasicUsage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  render() {
    return (
      <SearchBar
        query={this.state.query}
        onChange={(query) => {
          this.setState({
            query
          });
          action('events - change')(query);
        }}
        onSubmit={action('events - submit')}
        onKeyDown={action('events - key down')}
      />
    );
  }
}
