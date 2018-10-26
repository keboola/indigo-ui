import React from 'react';
import SearchBar from "../../../indigo/components/SearchBar";
import {action} from '@storybook/addon-actions';

export default class WithExternalButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'init',
    };
  }

  render() {
    return (
      <div>
        <SearchBar
          query={this.state.query}
          onChange={(query) => {
            this.setState({
              query: query
            });
            action('external - onchange')(query);
          }}
        />
        <div className="predefined-search-list">
          <button
            className="btn btn-link btn-link-inline predefined-search-link"
            onClick={() => {
              this.setState({
                query: 'status:error createdTime:2h ago'
              });
            }}
          >
            Recent failed jobs
          </button>
          <button
            className="btn btn-link btn-link-inline predefined-search-link"
            onClick={() => {
              this.setState({
                query: ''
              });
            }}
          >
            Clear (only for test)
          </button>
        </div>
      </div>
    );
  }
}
