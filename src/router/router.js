import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';

import Select from '../pages/select';

const history = createBrowserHistory();

function Router() {
  return (<BrowserRouter history={history}>
    <Switch>
      <Route exact={true} path='/'>
        <Select/>
      </Route>
    </Switch>
  </BrowserRouter>)
}

export default Router;
