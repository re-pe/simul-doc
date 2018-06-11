// deps for editor
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editor from 'tui-editor/dist/tui-editor-Editor-all';
import 'tui-editor/dist/tui-editor-extTable';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';

class TuiEditor extends Component {
  componentDidMount() {
    this.editor = new Editor({
      el: document.querySelector('#editSection'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px',
      initialValue: this.props.content,
      exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table', 'taskCounter'],
      events: {
        change: this.onChangeHandler,
      },
    });
  }

  componentDidUpdate() {
    this.editor.reset();
    this.editor.setMarkdown(this.props.content);
  }

  onChangeHandler = (e) => {
    console.log(this.editor.getValue());
  }

  render() {
    return <div id="editSection" className="docContent" />;
  }
}

TuiEditor.propTypes = {
  content: PropTypes.string.isRequired,
};

export default TuiEditor;
