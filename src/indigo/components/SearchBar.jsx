import React from 'react';
import { FormControl } from 'react-bootstrap';
import Icon from './icons'
import PropTypes from 'prop-types';
import classNames from "classnames";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.query,
    };
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleKeyDown(event) {
    this.props.onKeyDown(event.key);
  }
  
  handleChange(event) {
    this.setState({query: event.target.value});
    this.props.onChange(event.target.value);
  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
  }
  
  render() {
    return (
      <form
        className={classNames("searchbar", {
          [`searchbar-${this.props.theme}`]: !!this.props.theme,
        }, this.props.className)}
        onSubmit={this.handleSubmit}
      >
        <FormControl
          value={this.state.query}
          placeholder={this.props.placeholder}
          ref={this.props.ref}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          className="searchbar-input"
          type="text"
          autoFocus
        />
        <Icon.Search className="searchbar-icon icon-size-20" />
        {this.props.additionalActions && (
          <div className="searchbar-actions">
            {this.props.additionalActions}
          </div>
        )}
      </form>
    );
  }
}

SearchBar.defaultProps = {
  onKeyDown: () => {},
  onChange: () => {},
  onSubmit: () => {},
  placeholder: 'Search',
  query: '',
};

SearchBar.propTypes = {
  ref: PropTypes.string,
  query: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSubmit: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  additionalActions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
  theme: PropTypes.oneOf(['inverse']),
};

export default SearchBar;
