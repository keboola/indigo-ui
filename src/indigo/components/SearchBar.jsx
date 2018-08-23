import React from 'react';
import {ButtonToolbar, FormControl} from 'react-bootstrap';
import Icon from './icons'
import PropTypes from 'prop-types';
import classNames from "classnames";


class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {query: this.props.query};
    this.changeQuery = this.changeQuery.bind(this)
    this.submitQuery = this.submitQuery.bind(this)
  }
  
  changeQuery(event) {
    this.setState({query: event.target.value})
    this.props.onChange(event.target.value)
  }
  
  submitQuery(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }
  
  render() {
    return (
      <form className={classNames("searchbar", this.props.className)} onSubmit={(event) => this.submitQuery(event)}>
        <FormControl
          value={this.state.query}
          placeholder={this.props.placeholder}
          onChange={(event) => this.changeQuery(event)}
          className="searchbar-input"
          type="text"
          autoFocus
        />
        <Icon.Search className="searchbar-icon icon-size-20"/>
        {!!this.props.additionalActions &&
          this.props.additionalActions
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
  query: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  additionalActions: PropTypes.object
};

export default SearchBar;