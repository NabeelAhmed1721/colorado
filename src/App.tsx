import React from 'react';
import LinkContainer from './Components/LinkContainer';
import './App.css';

const App = () => (
  <div className="container">
    <div className="logo-container">
      <div className="logo-icon" />
      <h1>Colorado</h1>
    </div>
    <LinkContainer onMenuSelect={(title) => alert(title)} />
  </div>
);

export default App;
