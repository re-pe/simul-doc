import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import DocumentListItem from './DocumentListItem';
import DocumentDetails from './DocumentDetails';

const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

class DocumentContainer extends React.Component {
  state = {
    isDocumentListVisible: false,
    selected: null,
  };

  onSelect = (value) => {
    this.setState({
      selected: value,
    });
  }

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
        id={entry._id}
        title={entry.title}
        created={entry.createdAt.slice(0, 10)}
        // date from backend is string, so i just slice first 10
        // maybe i should convert it to data, when fetching and save in redux store as data
        // so ve can do like "last updated x minutes ago" calculations and so on
        onSelect={this.onSelect}
      />
    ));

    const selected = Object.values(documents).find(element => element._id === this.state.selected);

    return (
      <div>
        {/* need think more how to design button and where to plcehim on later versions */}
        <Button variant="fab" mini color="action" onClick={this.showDocumentList(true)} >
          <i className="material-icons">
          call_received
          </i>
        </Button> click to select document
        <Drawer open={this.state.isDocumentListVisible} onClose={this.showDocumentList(false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.showDocumentList(false)}
            onKeyDown={this.showDocumentList(false)}
          >
            <ListItem divider>
              <ListItemText primary="All documents" />
            </ListItem>
            {documentsListElements}
          </div>
        </Drawer>
        {selected
          ? <DocumentDetails document={selected} />
          : <h2>No document selected</h2>}
      </div>
    );
  }
}

DocumentContainer.defaultProps = {
  documents: [],
};

// have strange behavior if i make document proptypes:
//    array - somtimes get warn that passed is object expected array
//    object - somtimes get warn that passed is array expected object
// i think its because somtimes i get empty initial values before getting
// those from redux store. Or no. Dont wanan overthink on this when lot of
// more important work must be done
DocumentContainer.propTypes = {
  documents: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]),
};
const DocumentsWithStore = connect(mapStateToProps)(DocumentContainer);
export default DocumentsWithStore;

