import React, { useEffect, useState } from 'react';
import { Color, SketchPicker } from 'react-color';
import { ThemeProps } from './ChooseTheme';
import './CustomizeTheme.css';

const CustomizeTheme = () => {
  const [activeSelector, setActiveSelector] = useState<number>(0);
  const [selectedColorPrimary, setSelectedColorPrimary] = useState<Color>('');
  const [selectedColorSecondary, setSelectedColorSecondary] = useState<Color>(
    ''
  );
  const [selectedColorTertiary, setSelectedColorTertiary] = useState<Color>('');

  useEffect(() => {
    chrome.storage.local.get('selectedTheme', (data) => {
      const { selectedTheme } = data;
      if (selectedTheme.title === 'Custom') {
        setSelectedColorPrimary(selectedTheme.colors[0]);
        setSelectedColorSecondary(selectedTheme.colors[1]);
        setSelectedColorTertiary(selectedTheme.colors[2]);
      }
    });
  }, []);

  useEffect(() => {
    const customTheme: Pick<ThemeProps, 'title' | 'colors'> = {
      title: 'Custom',
      colors: [
        selectedColorPrimary.toString(),
        selectedColorSecondary.toString(),
        selectedColorTertiary.toString(),
      ],
    };
    chrome.storage.local.set({ selectedTheme: customTheme });
  }, [selectedColorPrimary, selectedColorSecondary, selectedColorTertiary]);

  // this is an awful way to do this. Im running out of time and options lol
  const getActiveColor = (activeSelectorID: number) => {
    if (activeSelectorID === 0) {
      return selectedColorPrimary;
    }
    if (activeSelectorID === 1) {
      return selectedColorSecondary;
    }
    return selectedColorTertiary;
  };

  const setActiveColor = (activeSelectorID: number, color: Color) => {
    if (activeSelectorID === 0) {
      setSelectedColorPrimary(color);
    } else if (activeSelectorID === 1) {
      setSelectedColorSecondary(color);
    } else {
      setSelectedColorTertiary(color);
    }
  };

  return (
    <div className="customize-theme-container">
      <SketchPicker
        color={getActiveColor(activeSelector)}
        presetColors={[]}
        disableAlpha
        onChange={(color) => setActiveColor(activeSelector, color.hex)}
      />
      <div className="customize-selector-container">
        <div
          className={`customize-selector ${
            activeSelector === 0 ? 'customize-selector-active' : ''
          }`}
          onClick={() => setActiveSelector(0)}
        >
          <div>Primary Color</div>
          <div
            className="customize-color-dot"
            style={{ backgroundColor: selectedColorPrimary.toString() }}
          />
        </div>
        <div
          className={`customize-selector ${
            activeSelector === 1 ? 'customize-selector-active' : ''
          }`}
          onClick={() => setActiveSelector(1)}
        >
          <div>Secondary Color</div>
          <div
            className="customize-color-dot"
            style={{ backgroundColor: selectedColorSecondary.toString() }}
          />
        </div>
        <div
          className={`customize-selector ${
            activeSelector === 2 ? 'customize-selector-active' : ''
          }`}
          onClick={() => setActiveSelector(2)}
        >
          <div>Tertiary Color</div>
          <div
            className="customize-color-dot"
            style={{ backgroundColor: selectedColorTertiary.toString() }}
          />
        </div>
      </div>
      <div
        style={{ marginTop: 24, cursor: 'pointer' }}
        onClick={() => {
          setSelectedColorPrimary('');
          setSelectedColorSecondary('');
          setSelectedColorTertiary('');
        }}
      >
        Reset
      </div>
    </div>
  );
};
export default CustomizeTheme;
