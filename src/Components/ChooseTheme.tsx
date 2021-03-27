import React from 'react';
import './ChooseTheme.css';

const ChooseTheme = () => (
  <div style={{ marginTop: 10 }}>
    <div className="theme">
      <h2>Dark Mode</h2>
      <div className="theme-color-list">
        <div className="theme-color" />
        <div className="theme-color" />
        <div className="theme-color" />
      </div>
    </div>
  </div>
);

export default ChooseTheme;
