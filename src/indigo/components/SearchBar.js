import React from 'react';
import { FormControl, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';

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
      setTimeout(() => {
        this.props.onSubmit();
      }, 50);
    }
    this.internalInputRef.focus();
  }

  render() {
    return (
      <div
        className={classnames(
          'searchbar',
          { 'with-border': this.props.bordered },
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
            autoFocus={this.props.autoFocus}
            inputRef={(input) => {
              this.internalInputRef = input;
              if (this.props.inputRef) {
                this.props.inputRef(input);
              }
            }}
          />
          <FontAwesomeIcon icon={faSearch} />
          {this.props.query && (
            <Button bsStyle="link" className="searchbar-clear-btn" onClick={this.handleClear}>
              <FontAwesomeIcon icon={faTimes} />
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
  bordered: false,
  autoFocus: false,
};

SearchBar.propTypes = {
  query: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func,
  onSubmit: PropTypes.func,
  inputRef: PropTypes.func,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  placeholder: PropTypes.string,
  additionalActions: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  bordered: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

export default SearchBar;
