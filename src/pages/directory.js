import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const CardsWrapperStyle = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  font-size: 2rem;
  justify-content: space-between;
  .card {
    border-radius: 1rem;
    box-shadow: var(--base-shadow);
    /* width: 30rem; */
    flex-basis: 32%;
    margin-bottom: 2%;
    padding: 3rem;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--hp-navy);
    transition: transform 0.2s, box-shadow 0.2s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--hover-shadow);
    }
    @media screen and (max-width: 768px) {
      flex-basis: 49%;
    }
    @media screen and (max-width: 400px) {
      flex-basis: 100%;
      margin-bottom: 1rem;
    }
  }
`;

const DirectoryPage = () => (
  <Layout>
    <h1>Directory</h1>
    <p>
      This could be an efficient traffic control, providing immediate links to
      the latest concent.
    </p>
    <CardsWrapperStyle>
      <div className="card">List of current Futures Program</div>
      <div className="card">Master list of all emails</div>
      <div className="card">Contact lists for support</div>
      <div className="card">Master document templates</div>
      <div className="card">PR request</div>
      <div className="card">Design support request</div>
    </CardsWrapperStyle>
  </Layout>
);

export default DirectoryPage;
