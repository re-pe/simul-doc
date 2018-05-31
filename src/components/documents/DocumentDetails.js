import React from 'react';
import PropTypes from 'prop-types';

const DocumentDetails = props => (
  <div>
    <h3>Not putting much effort to this element,
       because Redas has his own idea how should this element look,
       so just for testing purpose to check or correct props reaches this element,
       and our document selection side bar works correctly
    </h3>
    <div>Document id: {props.document._id}</div>
    <div>Document title: {props.document.title}</div>
    <div>Document content: {props.document.content}</div>
    <div>Document owner: {props.document.owner.firstName}</div>
    <div>Document authors: {props.document.authors.reduce((curr, next) => `${curr + next.firstName} `, '') }</div>
    <div>Document created at: {props.document.createdAt}</div>
    <div>Document updated at: {props.document.createdAt}</div>
  </div>
);

DocumentDetails.propTypes = {
  document: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default DocumentDetails;
