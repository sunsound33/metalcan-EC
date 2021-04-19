import React from 'react';
import ReactDOM from 'react-dom';
import Home from './page/store/Home.js';


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