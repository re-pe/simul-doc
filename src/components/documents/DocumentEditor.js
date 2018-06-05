import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  selected: state.documentReducer.selected,
});

const DocumentEditor = (props) => {
  const { selected } = props;
  let content = <div>No document selected</div>;
  if (selected) {
    content = (
      <Fragment>
        <div>Document id: {selected._id}</div>
        <div>Document title: {selected.title}</div>
        <div>Document content: {selected.content}</div>
        <div>Document owner: {selected.owner.firstName}</div>
        <div>Document authors: {selected.authors.reduce((curr, next) => `${curr + next.firstName} `, '') }</div>
        <div>Document created at: {selected.createdAt}</div>
        <div>Document updated at: {selected.createdAt}</div>
      </Fragment>
    );
  }
  return (
    <div className="content">
      <h3>Not putting much effort to this element,
      because Redas has his own idea how should this element look,
      so just for testing purpose to check or correct props reaches this element,
      and our document selection side bar works correctly
      </h3>
      {content}
    </div>);
};

DocumentEditor.defaultProps = {
  selected: undefined,
};
DocumentEditor.propTypes = {
  // not sure about validating document, is enough?
  // or should i use shape to validate each field in object
  selected: PropTypes.objectOf(PropTypes.any),
};

const DocumentEditorWithStore = connect(mapStateToProps)(DocumentEditor);
export default DocumentEditorWithStore;
