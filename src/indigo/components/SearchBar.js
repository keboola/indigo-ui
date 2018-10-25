import React from 'react';
import { FormControl, Button } from 'react-bootstrap';
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
    this.handleClear = this.handleClear.bind(this);
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

  handleClear(event) {
    event.preventDefault();
    this.setState({ query: '' });
    this.props.onClear();
    this.searchbarInput.focus();
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
            className={classNames('searchbar-input', {
              'searchbar-input-clearable': this.props.clearable,
            })}
            type="text"
            autoFocus
            inputRef={(input) => {
              this.searchbarInput = input;
              if (this.props.inputRef) {
                this.props.inputRef(input);
              }
            }}
          />
          <Icon.Search className="searchbar-icon icon-size-20" />
          {this.props.clearable && (
            <Button bsStyle="link" className="searchbar-clear-btn" onClick={this.handleClear}>
              <Icon.Times className="searchbar-clear-icon icon-size-16" />
            </Button>
          )}
        </form>
        {this.props.additionalActions && (
          <div className="searchbar-actions">{this.props.additionalActions}</div>
        )}
      </div>
    );
  }
}

SearchBar.defaultProps = {
  onKeyDown: () => {},
  onChange: () => {},
  onSubmit: () => {},
  onClear: () => {},
  placeholder: 'Search',
  query: '',
};

SearchBar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onSubmit: PropTypes.func,
  onClear: PropTypes.func,
  inputRef: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  additionalActions: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  theme: PropTypes.oneOf(['inverse']),
  clearable: PropTypes.any,
};

export default SearchBar;
