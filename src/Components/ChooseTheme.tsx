import React, { useEffect, useState } from 'react';
import './ChooseTheme.css';
import { Check } from 'react-feather';

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
  active?: boolean;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

const Theme = ({ title, colors, active, onClick }: ThemeProps) => (
  <div className="theme" onClick={onClick}>
    <h2>
      {title}
      {active ? <Check style={{ marginLeft: 10 }} /> : ''}
    </h2>
    <div className="theme-color-list">
      {colors.map((userColors) => (
        <ThemeColor color={userColors} key={userColors} />
      ))}
    </div>
  </div>
);

Theme.defaultProps = {
  active: false,
};

export const Themes: Pick<ThemeProps, 'title' | 'colors'>[] = [
  // add more themes here if you want
  {
    title: 'Dark Theme',
    colors: ['black', 'grey', 'silver'],
  },
  {
    title: 'Night Crawler',
    colors: ['red', 'orange', 'silver'],
  },
];

const ChooseTheme = () => {
  const [selectedTheme, setSelectedTheme] = useState<string | null>('');

  useEffect(() => {
    setSelectedTheme(localStorage.getItem('selectedTheme'));
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedTheme', selectedTheme || '');
  }, [selectedTheme]);

  return (
    <div style={{ marginTop: 10 }}>
      {Themes.map(({ title, colors }) => (
        <Theme
          title={title}
          colors={colors}
          key={title}
          active={selectedTheme === title}
          onClick={() =>
            selectedTheme === title
              ? setSelectedTheme('')
              : setSelectedTheme(title)
          }
        />
      ))}
    </div>
  );
};

export default ChooseTheme;
