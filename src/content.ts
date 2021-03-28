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

chrome.storage.local.get('selectedTheme', display);
