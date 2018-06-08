import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import DocumentListItem from './DocumentListItem';
import DocumentEditor from './DocumentEditor';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from '../../js/constants/constants';
import CreateDocument from './AddNewDocumentButton';
import { deleteDocument } from '../../js/actions/document-actions';

const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

const mapDispatchToProps = dispatch => ({
  deleteDocument: id => dispatch(deleteDocument(id)),
});


const styles = () => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
  },
  paper: {
    height: `calc(100% - ${HEADER_HEIGHT} - ${FOOTER_HEIGHT})`,
    top: HEADER_HEIGHT,
  },
});

class EditorPage extends Component {
  state = {
    open: false,
  };

  openConfirmDialog = (id, title) => {
    this.setState({
      open: true,
      documentForDeleteId: id,
      documentForDelteTitle: title,
    });
  };

  closeConfirmDeletDeialog = () => {
    this.setState({ open: false });
  };

  handleDocumentDelete = () => {
    this.closeConfirmDeletDeialog();
    this.props.deleteDocument(this.state.documentForDeleteId);
  };

  render() {
    const { documents, classes } = this.props;
    const documentsListElements = Object.values(documents).map(entry => (
      <DocumentListItem
        key={entry._id}
        id={entry._id}
        title={entry.title}
        created={entry.createdAt}
        openConfirmDialog={this.openConfirmDialog}
      />
    ));
    return (
      <div
        className={classes.container}
      >
        <Dialog
          open={this.state.open}
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
            <Button onClick={this.closeConfirmDeletDeialog}>
                  No
            </Button>
            <Button onClick={this.handleDocumentDelete} autoFocus>
                  Yes
            </Button>
          </DialogActions>
        </Dialog>
        <Drawer variant="permanent" classes={{ paper: classes.paper }}>
          <div className="list">
            <CreateDocument />
            {documentsListElements}
          </div>
        </Drawer>
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
  classes: PropTypes.objectOf(PropTypes.any).isRequired,
  deleteDocument: PropTypes.func.isRequired,
};

const DocumentsWithStore = connect(mapStateToProps, mapDispatchToProps)(EditorPage);
export default withStyles(styles)(DocumentsWithStore);
