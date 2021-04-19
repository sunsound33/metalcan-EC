import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Route, Switch, } from 'react-router-dom';

import Store from './page/store/Store.js';
import Home from './page/store/Home.js';
import User from './page/user/User.js';
import Auth from './page/auth/Auth.js';
import NavBar from './NavBar';
function App() {
  return (
    <div>
      <Home />
    </div>
        
        
  );
};



if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}