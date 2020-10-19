import { createGlobalStyle } from 'styled-components';

export const BREAKPOINT = {
  TABLET: '768px',
  DESKTOP: '992px',
  LARGE_DESKTOP: '1200px',
};

export const COLOR = {
  YELLOW: '#FF9F1C',
  RED: '#FF4040',
  GREEN: '#2EC4B6',
  DARK: '#0A1014',
  GREY: '#1B2329',
  MID_GREY: '#353F4C',
  LIGHT_GREY: '#7A8C99',
  WHITE: '#fff',
};

export const TEXT_COLOR = {
  DEFAULT: COLOR.WHITE,
  SECONDARY: COLOR.LIGHT_GREY,
  ACTIVE: COLOR.GREEN,
  NEGATIVE: COLOR.RED,
  HIGHLIGHT: COLOR.YELLOW,
  DISABLED: COLOR.MID_GREY, 
};

export const BORDER = '3px';

export const SPACING = '25px';

export const TRANSITION = '200ms';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${COLOR.DARK};
    font-family: 'Roboto', sans-serif;
    color: ${TEXT_COLOR.DEFAULT};
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  h1 {
    font-size: 80px;
    font-weight: 700;
    letter-spacing: 0.8px;
    line-height: 88px;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 30px;
  }

  h3 {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2px;
    line-height: 28px;
  }

  h4, p {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.16px;
    line-height: 24px;
  }

  h4 {
    color: ${TEXT_COLOR.SECONDARY};
  }
`;
