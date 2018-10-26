import React from 'react';
import SearchBar from "../../../indigo/components/SearchBar";

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
          })
        }}
      />
    );
  }
}
