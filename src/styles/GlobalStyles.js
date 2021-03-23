import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  --hp-light-blue: #0d9bd5;
  --hp-navy: #0c3258;
  --hp-green: #23d58c;
  --hp-white: #fff;
  --hp-off-white: #f6f6f6;
  --hp-coolgray: #d7e2e6;
  --hp-gold: #f7aa00;
  --hp-yellow: #ffc852;
  --hp-hot-orange: #ff7741;
  --hp-purple: #6a52ce;
  --hp-turquoise: #18b8b1;
  --hp-indigo: #062742;
  --hp-dark-gray: #595959;
  --hp-medium-gray: #b8b8b8;
  --hp-legal-navy: #4e7d90;
  --hp-cold-black: #001c2c;
  --sidebar-width: 260px;
  --topbar-height: 80px;
  --base-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  --hover-shadow: 0 2px 15px rgba(0, 0, 0, 0.15);
}
  html {
    margin: 0;
    font-family: Poppins, sans-serif;
    padding: 0;
    font-size: 10px;
    background: var(--hp-navy);
  }
  body {
    margin: 0;
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
