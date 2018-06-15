import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DocumentsPage from '../documents/EditorPage';
import UserPage from '../users/UserPage';

import PrivateRoute from './privateRoute';

const Main = () => (
  <main>
    <Switch>
      <Route path="/login" component={UserPage} />
      <PrivateRoute exact path="/documents" component={DocumentsPage} />
    </Switch>
  </main>
);

export default Main;
