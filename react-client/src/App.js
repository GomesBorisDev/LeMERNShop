import React from 'react';
import './App.css';

import { BrowserRouter as Router } from 'react-router-dom';


import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      
      <Router>

        <Nav/>

      </Router>

    </div>
  );
}

export default App;
