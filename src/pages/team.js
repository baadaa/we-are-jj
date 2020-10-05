import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import teamList from '../data/team.json';

const MemberStyle = styled.div`
  border-radius: 1rem;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
  /* width: 30rem; */
  flex-basis: 32%;
  margin-bottom: 2%;
  box-sizing: border-box;
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
    text-align: center;
  }
  p + p {
    margin-top: 0.5rem;
  }
  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 10rem;
    margin-bottom: 1rem;
  }
`;

const MemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Member = ({ person }) => {
  const {
    id,
    name,
    nickname,
    title,
    manager,
    squad,
    email,
    timezone,
    location,
    photo,
  } = person;
  return (
    <MemberStyle>
      <img src={photo} alt={name} />
      <p>{name}</p>
      <p>{title}</p>
      <p>{location}</p>
    </MemberStyle>
  );
};
const TeamPage = () => (
  <Layout>
    <h1>Team</h1>
    <MemberWrapper>
      {teamList.people.map(person => (
        <Member key={person.id} person={person} />
      ))}
    </MemberWrapper>
  </Layout>
);

export default TeamPage;
