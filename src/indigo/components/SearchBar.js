import React from 'react';
import { FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './icons';

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
    this.setState({ query: event.target.value });
    this.props.onChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  renderRecommendedLink(linkElement) {
    return (
      <span className="searchbar-recommended-link">
        <Icon.Search className="searchbar-recommended-link-icon icon-size-16" />
        {linkElement}
      </span>
    );
  }

  render() {
    return (
      <div
        className={classNames(
          'searchbar',
          {
            [`searchbar-${this.props.theme}`]: !!this.props.theme,
          },
          this.props.className
        )}
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
          <div className="searchbar-actions">{this.props.additionalActions}</div>
        )}
        {this.props.recommendedSearches && (
          <div className="searchbar-recommended-link-list">
            {this.props.recommendedSearches
              .map((link) => this.renderRecommendedLink(link))
              .reduce((prev, curr) => [prev, ', ', curr])}
          </div>
        )}
      </div>
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
  query: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSubmit: PropTypes.func,
  inputRef: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  additionalActions: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  recommendedSearches: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  theme: PropTypes.oneOf(['inverse']),
};

export default SearchBar;
