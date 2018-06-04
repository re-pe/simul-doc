import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';

import DocumentListItem from './DocumentListItem';
import DocumentEditor from './DocumentEditor';

const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

class EditorPage extends React.Component {
  onSelect = (value) => {
    this.setState({
      selected: value,
    });
  }

  render() {
    const { documents } = this.props;
    //console.log(this.props);
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


    return (
      <div>
        <Drawer variant="permanent">
          <div className="list">
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
};

const DocumentsWithStore = connect(mapStateToProps)(EditorPage);
export default DocumentsWithStore;
