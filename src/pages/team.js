import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import teamList from '../data/team.json';

const MemberStyle = styled.div`
  border-radius: 1rem;
  box-shadow: var(--base-shadow);
  /* width: 30rem; */
  flex-basis: 32%;
  margin-bottom: 2%;
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0;
    text-align: center;
    &.name {
      margin-bottom: 0.5rem;
    }
    &.detail {
      font-size: 1.2rem;
    }
  }
  p + p {
    margin-top: 0.5rem;
  }
  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
    border-radius: 10rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: 768px) {
    flex-basis: 49%;
  }
  @media screen and (max-width: 400px) {
    flex-basis: 100%;
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
      <p className="name">{name}</p>
      <p className="detail">{email}</p>
      <p className="detail">{title}</p>
      <p className="detail">{location}</p>
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
