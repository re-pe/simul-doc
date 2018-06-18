import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DocumentListItem from './DocumentListItem';
import DocumentEditor from './DocumentEditor';
import CreateDocument from './AddNewDocumentButton';
import { deleteDocument, loadDocument } from '../../js/actions/document-actions';

const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

const mapDispatchToProps = dispatch => ({
  deleteDocument: id => dispatch(deleteDocument(id)),
  selectDocument: id => dispatch(loadDocument(id)),
});

class EditorPage extends Component {
  state = {
    confirmDeleteDialogOpen: false,
  };

  openConfirmDeleteDocumentDialog = (id, title) => {
    this.setState({
      confirmDeleteDialogOpen: true,
      documentForDeleteId: id,
      documentForDelteTitle: title,
    });
  };

  closeConfirmDeleteDocumentDialog = () => {
    this.setState({ confirmDeleteDialogOpen: false });
  };

  handleDocumentDelete = () => {
    this.closeConfirmDeleteDocumentDialog();
    this.props.deleteDocument(this.state.documentForDeleteId);
  };

  handleDocumentSelect = (id) => {
    this.props.selectDocument(id);
  }

  render() {
    const { documents } = this.props;
    const documentsListElements = Object.values(documents).map(entry => (
      <DocumentListItem
        key={entry._id}
        id={entry._id}
        title={entry.title}
        created={entry.createdAt}
        openConfirmDialog={this.openConfirmDeleteDocumentDialog}
        selectDocument={this.handleDocumentSelect}
      />
    ));
    return (
      <div
        className="editorPage"
      >
        <Dialog
          open={this.state.confirmDeleteDialogOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm deletion</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
                  Delete the {this.state.documentForDelteTitle} document ?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeConfirmDeleteDocumentDialog}>
                  No
            </Button>
            <Button onClick={this.handleDocumentDelete} autoFocus>
                  Yes
            </Button>
          </DialogActions>
        </Dialog>
        <div className="sideBar">
          <CreateDocument />
          {documentsListElements}
        </div>
        <DocumentEditor />
      </div>
    );
  }
}

EditorPage.defaultProps = {
  documents: [],
};

EditorPage.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object),
  deleteDocument: PropTypes.func.isRequired,
  selectDocument: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorPage);
