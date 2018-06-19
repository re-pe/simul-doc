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
  }

  getChanges = (data) => {
    if (this.state.value !== data) {
      this.setState({
        value: data,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    }, () => {
      socketApi.editDocument(this.props.document._id, this.state.value);
    });
  }

  render() {
    return (
      <Fragment>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </Fragment>);
  }
}

SocketedTextArea.propTypes = {
  document: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(SocketedTextArea);
