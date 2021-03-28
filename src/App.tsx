import React, { useState } from 'react';
import { ArrowLeft } from 'react-feather';
import LinkContainer from './Components/LinkContainer';
import ChooseTheme from './Components/ChooseTheme';
import PickColor from './Components/PickColor';
import './App.css';

type BackButtonProps = {
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const BackButton = ({ onClick }: BackButtonProps) => (
  <div className="back-button" onClick={onClick}>
    <ArrowLeft className="back-button-arrow" size={18} />
    <div>Go Back</div>
  </div>
);

type SettingsProviderProps = {
  title: string;
};

const SettingsProvider = ({ title }: SettingsProviderProps) => {
  switch (title) {
    case 'Choose Themes':
      return <ChooseTheme />;
    case 'Recommendations':
      return <PickColor />;
    case 'Color Blind Themes':
      break;
    default:
      return null;
  }
  return null;
}; 

const App = () => {
  const [activeLink, setActiveLink] = useState<string>('');

  return (
    <div className="container">
      <div className="logo-container">
        <div className="logo-icon" />
        <h1>Colorado</h1>
      </div>
      <div className={`menu-container ${activeLink ? 'menu-active' : ''}`}>
        <div className="settings-menu">
          <BackButton onClick={() => setActiveLink('')} />
          <SettingsProvider title={activeLink} />
        </div>
        <LinkContainer onMenuSelect={(title) => setActiveLink(title)} />
      </div>
    </div>
  );
};

export default App;
