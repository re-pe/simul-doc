import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import brace from 'brace';
import AceEditor from 'react-ace';
import { split as SplitEditor } from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';

import { subscribeToEditorChange, socketApi } from '../../js/api/socketApi';

const mapStateToProps = state => ({
  document: state.documentReducer.selectedDocument,
});

class SocketedTextArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.document.content,
    };

    subscribeToEditorChange(this.getChanges);
  }

  getChanges = (data) => {
    if (this.state.value !== data) {
      this.setState({
        value: data,
      });
    }
  }

  handleChange = (value, second) => {
    console.log('eddited', second);
    this.setState({
      value,
    }, () => {
      socketApi.editDocument(this.props.document._id, this.state.value);
    });
  }

  render() {
    return (
      <Fragment>
        <AceEditor
          mode="java"
          theme="github"
          onChange={this.handleChange}
          name="ace"
          editorProps={{ $blockScrolling: true }}
          value={this.state.value}
        />
      </Fragment>);
  }
}

SocketedTextArea.propTypes = {
  document: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(SocketedTextArea);
