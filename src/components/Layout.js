import React from 'react';
import '../styles/type.css';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <main>{children}</main>
  </>
);

export default Layout;
