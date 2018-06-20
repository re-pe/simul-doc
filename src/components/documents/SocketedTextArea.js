import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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

  componentWillReceiveProps(props) {
    this.setState({
      value: props.document.content,
    });
    document.getElementById('editor').innerHTML = props.document.content;
  }

  getChanges = (data) => {
    // when gets from socket
  }

  handleChange = (value) => {
    console.log(value.target.innerHTML);
    // this.setState({
    //   value,
    // }, () => {
    //   socketApi.editDocument(this.props.document._id, this.state.value);
    // });
  }


  render() {
    return (
      <Fragment>
        <input type="button" value="simulate get" onClick={() => { this.getChanges('200'); }} />
        <div id="editor" contentEditable onInput={this.handleChange}>{this.state.value}</div>
      </Fragment>);
  }
}

SocketedTextArea.propTypes = {
  document: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(SocketedTextArea);
