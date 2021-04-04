import React from 'react';
import '../styles/type.css';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './headerArea';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
);

const ProfileLayout = ({ location, children }) => (
  <div
    style={{
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto',
      color: '#fff',
      padding: '120px 15px 0 15px',
    }}
  >
    <GlobalStyles />
    <Header location={location} />
    <main>{children}</main>
  </div>
);
export default Layout;

export { ProfileLayout };
