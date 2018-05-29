import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Documents from '../documents/Documents';
import Users from '../users/Users';

const Main = () => (
  <main>
    <Switch>
      <Route path="/users" component={Users} />
      <Route path="/documents" component={Documents} />
    </Switch>
  </main>
);

export default Main;
