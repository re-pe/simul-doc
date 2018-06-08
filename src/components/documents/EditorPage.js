import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import DocumentListItem from './DocumentListItem';
import DocumentEditor from './DocumentEditor';

const mapStateToProps = state => ({
  documents: state.documentReducer.documents,
});

const EditorPage = (props) => {
  const { documents } = props;
  const documentsListElements = Object.values(documents).map(entry => (
    <DocumentListItem
      key={entry._id}
      id={entry._id}
      title={entry.title}
      created={entry.createdAt}
    />
  ));
  return (
    <div
      className="editorPage"
    >
      <div className="sideBar">
        {documentsListElements}
      </div>
      <DocumentEditor />
    </div>
  );
};

EditorPage.defaultProps = {
  documents: [],
};

EditorPage.propTypes = {
  documents: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(EditorPage);
