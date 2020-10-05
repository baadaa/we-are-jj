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
}
  html {
    margin: 0;
    font-family: Poppins, sans-serif;
    padding: 0;
    font-size: 10px;
    background: var(--hp-off-white);
  }
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    position: relative;
    padding-bottom: 10rem;
  }
`;

export default GlobalStyles;
