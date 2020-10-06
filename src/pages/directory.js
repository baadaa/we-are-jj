import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const CardsWrapperStyle = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  font-size: 2rem;
`;

const DirectoryPage = () => (
  <Layout>
    <h1>Directory</h1>
    <CardsWrapperStyle>
      FPO. <br />
      List of all the items and entities within Homepoint brand and direct links
      for quick access to each
    </CardsWrapperStyle>
  </Layout>
);

export default DirectoryPage;
