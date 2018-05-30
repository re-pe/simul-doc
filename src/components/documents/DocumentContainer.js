import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import DocumentListItem from './DocumentListItem';


const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

class DocumentContainer extends React.Component {
  state = {
    isDocumentListVisible: false,
  };
  // dont understand extra ()=>, know this like function in function,
  // but why get Maximum update depth exceeded if removing ()=>,
  // i mean whats happening inside react,
  showDocumentList = isVisible => () => {
    this.setState({
      isDocumentListVisible: isVisible,
    });
  }


  render() {
    const { documents } = this.props;
    const documentsListElements = Object.values(documents).map(entry => (
      <DocumentListItem
        key={entry._id}
        title={entry.title}
        created={entry.createdAt.slice(0, 10)}
        // date from backend is string, so i just slice first 10
        // maybe i should convert it to data, when fetching and save in redux store as data
        // so ve can do like "last updated x minutes ago" calculations and so on
      />
    ));

    return (
      <div>
        {/* button will be replaced to something less ugly */}
        <Button onClick={this.showDocumentList(true)}>Show list</Button>
        <Drawer open={this.state.isDocumentListVisible} onClose={this.showDocumentList(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.showDocumentList(false)}
            onKeyDown={this.showDocumentList(false)}
          >
            {documentsListElements}
          </div>
        </Drawer>
        <h3>Documents</h3>
        <p>Here will be selected document content</p>
      </div>
    );
  }
}

DocumentContainer.propTypes = {
  documents: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};
const DocumentsWithStore = connect(mapStateToProps)(DocumentContainer);
export default DocumentsWithStore;

