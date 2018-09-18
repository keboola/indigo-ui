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
    this.props.onSubmit();
  }
  
  render() {
    return (
      <div
        className={classNames("searchbar", {
          [`searchbar-${this.props.theme}`]: !!this.props.theme,
        }, this.props.className)}
      >
        <form onSubmit={this.handleSubmit} className="searchbar-form">
          <FormControl
            value={this.state.query}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className="searchbar-input"
            type="text"
            autoFocus
            inputRef={this.props.inputRef}
          />
          <Icon.Search className="searchbar-icon icon-size-20" />
        </form>
        {this.props.additionalActions && (
          <div className="searchbar-actions">
            {this.props.additionalActions}
          </div>
        )}
      </div>
    );
  }
}

SearchBar.defaultProps = {
  onKeyDown: (eventKey) => {},
  onChange: (query) => {},
  onSubmit: () => {},
  placeholder: 'Search',
  query: '',
};

SearchBar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSubmit: PropTypes.func,
  inputRef: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  additionalActions: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
  ]),
  theme: PropTypes.oneOf(['inverse']),
};

export default SearchBar;
