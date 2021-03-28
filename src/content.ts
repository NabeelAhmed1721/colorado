import { ThemeProps } from './Components/ChooseTheme';
// This file is injected as a content script
console.log('Hello from  🟣 Colorado!');

const display = (data: { [key: string]: ThemeProps }) => {
  const [primary, secondary, tertiary] = data.selectedTheme.colors;
  const styles = `body, div, header, nav, a, ul, section, article, footer {background-color: ${primary} !important;}h1,input,div {color: ${secondary} !important;}p,a {color: ${tertiary} !important;}`;

  const styleSheet = document.createElement('style');
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);
};

const accessibility = (data: { [key: string]: string[] }) => {
  const { selectedAccesses } = data;
  selectedAccesses.forEach((access) => {
    if (access === 'Bigger Font') {
      document.body.style.fontSize = '16pt';
    }
    if (access === 'Bold Characters') {
      const styles = `body, div, header, nav, a, ul, section, article, footer, h1, h2, h3, h4, h5, h6, p, input {text-decoration: bold !important;}`;

      const styleSheet = document.createElement('style');
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
    if (access === 'Black and White') {
      const styles = `body {filter: grayscale(1) !important;}`;

      const styleSheet = document.createElement('style');
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }
  });
};

chrome.storage.local.get('selectedTheme', display);
chrome.storage.local.get('selectedAccesses', accessibility);
