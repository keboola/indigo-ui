import React from 'react';
import SearchBar from "../../../indigo/components/SearchBar";
import {action} from "@storybook/addon-actions";
import {FormControl} from "react-bootstrap";

export default class WithRef extends React.Component {
  constructor(props) {
    super(props);
    this.fillSecondInput = this.fillSecondInput.bind(this);
    this.setSecondValue = this.setSecondValue.bind(this);
    this.state = {
      secondValue: '',
      query: ''
    };
  }

  fillSecondInput() {
    action('with ref - submitted')();
    this.setSecondValue(this.searchInput.value);
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
          query={this.state.query}
          onSubmit={this.fillSecondInput}
          onChange={(query) => {
            this.setState({
              query: query
            })
          }}
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
