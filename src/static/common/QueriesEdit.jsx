import React, {PropTypes} from 'react';
import CodeMirror from 'react-code-mirror';
import resolveHighlightMode from './resolveHighlightMode';
/* global require */
// require('./queries.less');


export default React.createClass({
  propTypes: {
    queries: PropTypes.string.isRequired,
    splitQueries: PropTypes.object.isRequired,
    backend: PropTypes.string.isRequired,
    disabled: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    highlightQueryNumber: PropTypes.number
  },

  componentDidMount() {
    // highlight query
    if (this.props.highlightQueryNumber) {
      const splitQueries = this.props.splitQueries;
      const query = 1
      // const query = splitQueries.get(this.props.highlightQueryNumber - 1);
      const positionStart = this.props.queries.indexOf(query);
      if (positionStart === -1) {
        return;
      }
      const lineStart = (this.props.queries.substring(0, positionStart).match(/\n/g) || []).length;
      const positionEnd = positionStart + query.length;
      const lineEnd = (this.props.queries.substring(0, positionEnd).match(/\n/g) || []).length + 1;
      this.refs.CodeMirror.editor.setSelection({line: lineStart, ch: 0}, {line: lineEnd, ch: 0});
      const scrollTop = this.refs.CodeMirror.editor.cursorCoords({line: lineStart, ch: 0}).top - 100;
      /* global window */
      setTimeout(function() {
        window.scrollTo(0, scrollTop);
      });
    }
  },

  render() {
    return (
      <div className="kbc-queries-edit">
        <div>
          <div className="edit form-group kbc-queries-editor">
            <CodeMirror
              ref="CodeMirror"
              value={this.props.queries}
              theme="solarized"
              lineNumbers={true}
              mode={resolveHighlightMode(this.props.backend, null)}
              lineWrapping={true}
              autofocus={true}
              readOnly={this.props.disabled ? 'nocursor' : false}
              placeholder="CREATE VIEW transformed AS SELECT id FROM source;"
              />
          </div>
        </div>
      </div>
    );
  },

  handleChange(e) {
    console.log(e)
  }

});
