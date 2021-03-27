import React from 'react';
import './ChooseTheme.css';

type ThemeColorProps = {
  color: string;
};

const ThemeColor = ({ color }: ThemeColorProps) => (
  <div className="theme-color" style={{ backgroundColor: color }} />
);

type ThemeProps = {
  title: string;
  colors: [
    ThemeColorProps['color'],
    ThemeColorProps['color'],
    ThemeColorProps['color']
  ];
};

const Theme = ({ title, colors }: ThemeProps) => (
  <div className="theme">
    <h2>{title}</h2>
    <div className="theme-color-list">
      {colors.map((userColors) => (
        <ThemeColor color={userColors} key={userColors} />
      ))}
    </div>
  </div>
);

const ChooseTheme = () => (
  <div style={{ marginTop: 10 }}>
    <Theme title="Dark Mode" colors={['black', 'grey', 'silver']} />
  </div>
);

export default ChooseTheme;
