import React from 'react';
import { ButtonToolbar, FormControl } from 'react-bootstrap';
import { Icon } from '../../indigo/components';

export default React.createClass({

  propTypes: {
    query: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    onSubmit: React.PropTypes.func,
    className: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    actions: React.PropTypes.object
  },

  getInitialState() {
    return {
      query: this.props.query
    };
  },

  getDefaultProps() {
    return {
      onChange: () => {},
      onSubmit: (query) => query,
      placeholder: 'Search'
    };
  },

  onChange(event) {
    this.setState({
      query: event.target.value
    });
    this.props.onChange(event.target.value);
  },

  onSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  },

  render() {
    return (
      <form className="searchbar" onSubmit={this.onSubmit}>
        <Icon.Search className="searchbar-icon icon-size-20"/>
        <FormControl
          value={this.state.query}
          placeholder={this.props.placeholder}
          onChange={this.onChange}
          className="searchbar-input"
          ref="searchInput"
          type="text"
          autoFocus
        />
        {!!this.props.actions &&
        <ButtonToolbar className="searchbar-actions">
          {this.props.actions}
        </ButtonToolbar>
        }
      </form>
    );
  }

});