import React, { Component } from 'react';
import axios from 'axios';
import CreateButton from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { URL } from '../../js/constants/constants';
import store from '../../js/store/store';
import { loadDocument, loadDocumentList } from '../../js/actions/document-actions';

class AddNewDocumentButton extends Component {
  // since we dont have authentication and to create document, document need owner
  // we do temporary cheat here, we do extra request for users
  // then we use first found user id as owner and author in create new document
  // later we remove get request and replace id with logged user id
  createNewDocument = () => {
    axios
      .get(`${URL}/users`)
      .then(response => (response.data[0]._id))
      .then((result) => {
        axios
          .post(`${URL}/documents`, {
            owner: result,
            authors: [result],
            title: 'new Document',
            // i think backend should alow us create document with empty content
            // instead forcing us to put something into content whan we creating document
            content: ' ',
          })
          .then((response) => {
            if (response.status === 200) {
              // we selecting newly created document and reloading document list to see doc on list
              store.dispatch(loadDocument(response.data._id));
              store.dispatch(loadDocumentList());
            }
          });
      })
      .catch((error) => {
        // handle this when we have way to inform user about errors
        console.log(error);
      });
  }

  render() {
    return (
      <ListItem button divider onClick={this.createNewDocument}>
        <ListItemText
          primary="Create new document"
        />
        <CreateButton />
      </ListItem>
    );
  }
}

export default AddNewDocumentButton;
