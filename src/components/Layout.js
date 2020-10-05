import React from 'react';
import styled from 'styled-components';
import 'normalize.css';
import { Helmet } from 'react-helmet';
import GlobalStyles from '../styles/GlobalStyles';
import Header from './Header';

// TODO: Add `HELMET` for metadata

const WrapperStyle = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  padding: 8rem 1.5rem 0;
`;

const Layout = ({ children }) => (
  <WrapperStyle>
    <Helmet>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
      />
    </Helmet>
    <GlobalStyles />
    <Header />

    {children}
  </WrapperStyle>
);

export default Layout;
