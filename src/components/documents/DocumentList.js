import React from 'react';
import Divider from '@material-ui/core/Divider';
import DocumentListItem from './DocumentListItem';

const Documents = (
  <div className="docList" >
    <DocumentListItem title="doc 1" created="2004-5-2" />
    <Divider />
    <DocumentListItem title="doc 2" created="2004-5-2" />
  </div>
);

export default Documents;
