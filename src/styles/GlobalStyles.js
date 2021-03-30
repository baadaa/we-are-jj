import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #202020;
    --blue900: #0A2029;
    --blue800: #144052;
    --blue700: #1E607B;
    --blue600: #2880A4;
    --blue500: #33A1CE;
    --blue400: #5BB3D7;
    --blue300: #84C6E1;
    --blue200: #ADD9EB;
    --blue100: #D6ECF5;
    --blue50: #EAF6FA;
    --green900: #18260D;
    --green800: #304C1A;
    --green700: #487227;
    --green600: #609834;
    --green500: #79BF42;
    --green400: #93CB67;
    --green300: #AED88D;
    --green200: #C9E5B3;
    --green100: #E4F2D9;
    --green50: #F1F9EC;
    --yellow900: #332300;
    --yellow800: #664600;
    --yellow700: #996900;
    --yellow600: #CC8C00;
    --yellow500: #FFB000;
    --yellow400: #FFBF33;
    --yellow300: #FFCF66;
    --yellow200: #FFDF99;
    --yellow100: #FFEFCC;
    --yellow50: #FFF7E5;
    --red900: #290A14;
    --red800: #531329;
    --red700: #7C1D3D;
    --red600: #A62652;
    --red500: #C23F6B;
    --red400: #D95985;
    --red300: #E283A3;
    --red200: #ECACC2;
    --red100: #F5D6E0;
    --red50: #FAEAF0;


  --base-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  --hover-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
}
  html {
    margin: 0;
    font-family: "Work Sans", sans-serif;
    padding: 0;
    font-size: 10px;
    background: var(--hp-navy);
  }
  body {
    margin: 0;
    background-color: var(--black);
    padding: 0;
    position: relative;
  }
  *, * > * {
    box-sizing: border-box;
  }
  p {
    font-size: 1.5rem;
  }
  @keyframes breatheRight {
    0% {
      transform: scale(1) translateY(-55%) translateX(50%);
    }
    33% {
      transform: scale(1.1) translateY(-55%) translateX(50%);
    }
    100% {
      transform: scale(1) translateY(-55%) translateX(50%);
    }
  }
  @keyframes breatheLeft {
    0% {
      transform: scale(1) translateY(5%) translateX(-10%);
    }
    33% {
      transform: scale(1.1) translateY(5%) translateX(-10%);
    }
    100% {
      transform: scale(1) translateY(5%) translateX(-10%);
    }
  }
`;

export default GlobalStyles;
