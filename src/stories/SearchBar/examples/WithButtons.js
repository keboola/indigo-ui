import React from 'react';
import SearchBar from "../../../indigo/components/SearchBar";
import {Button} from "react-bootstrap";

export default class WithButtons extends React.Component {
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
        additionalActions={[
          <Button key="button-default">
            Demo Button
          </Button>,
          <Button bsStyle="primary" key="button-primary">
            Demo Button
          </Button>
        ]}
      />
    );
  }
}
