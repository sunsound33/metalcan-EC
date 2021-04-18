import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route, Switch, } from 'react-router-dom';

import Store from './page/store/Store.js';
import Home from './page/store/Home.js';
import User from './page/user/User.js';
import Auth from './page/auth/Auth.js';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Store' component={Store} />
        <Route path='/User' component={User} />
        <Route path='/Auth' component={Auth} />
      </Switch>
    </BrowserRouter>
  );
};



if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}