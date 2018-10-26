import React from 'react';
import { FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './icons';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event.key);
    }
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
  }

  handleClear(event) {
    event.preventDefault();
    this.props.onChange('');
    if (this.props.onSubmit) {
      this.props.onSubmit();
    }
    this.internalInputRef.focus();
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
            value={this.props.query}
            placeholder={this.props.placeholder}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyDown}
            className="searchbar-input"
            type="text"
            autoFocus
            inputRef={(input) => {
              this.internalInputRef = input;
              if (this.props.inputRef) {
                this.props.inputRef(input);
              }
            }}
          />
          <Icon.Search className="searchbar-icon icon-size-20" />
          {this.props.query && (
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
  placeholder: 'Search',
  query: '',
};

SearchBar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  onSubmit: PropTypes.func,
  inputRef: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  additionalActions: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  theme: PropTypes.oneOf(['inverse']),
};

export default SearchBar;
