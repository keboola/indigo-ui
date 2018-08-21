import React from 'react';
import {ButtonToolbar, FormControl} from 'react-bootstrap';
import Icon from './icons'
import PropTypes from 'prop-types';


class SearchBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {query: this.props.query};
    this.changeQuery = this.changeQuery.bind(this)
    this.submitQuery = this.submitQuery.bind(this)
  }
  
  changeQuery(event) {
    this.setState({query: event.target.value})
  }
  
  submitQuery(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }
  
  render() {
    return (
      <form className="searchbar" onSubmit={(event) => this.submitQuery(event)}>
        <Icon.Search className="searchbar-icon icon-size-20"/>
        <FormControl
          value={this.state.query}
          placeholder={this.props.placeholder}
          onChange={(event) => this.changeQuery(event)}
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
}

SearchBar.defaultProps = {
  onChange: () => {
  },
  onSubmit: (query) => query,
  placeholder: 'Search'
};


SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  actions: PropTypes.object
};

export default SearchBar;