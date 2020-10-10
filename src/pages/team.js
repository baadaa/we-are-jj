import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import teamList from '../data/team.json';

const RadioStyle = styled.div`
  display: flex;
  margin-bottom: 1rem;
  /* justify-content: flex-end; */
  /* flex-basis: 350px; */
  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.2rem;
    color: var(--hp-dark-gray);
    &.active {
      color: var(--hp-indigo);
    }
  }
  input {
    cursor: pointer;
    margin-right: 0.5rem;
  }
  label + label {
    margin-left: 1rem;
  }
  @media screen and (max-width: 600px) {
    flex-direction: column;
    flex-basis: 110px;
    margin-left: 2rem;
    flex-shrink: 0;
    label {
      font-size: 1rem;
    }
    label + label {
      margin: 0;
    }
  }
`;
const MemberStyle = styled.div`
  border-radius: 1rem;
  box-shadow: var(--base-shadow);
  /* width: 30rem; */
  background: #fff;
  flex-basis: ${props => (props.isFixedWidth ? '250px!important' : '32%')};
  width: ${props => (props.isFixedWidth ? '250px!important' : '32%')};
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
const SquadWrapper = styled.div`
  display: flex;
  background: var(--hp-coolgray);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: inset var(--base-shadow);
  margin-bottom: 2rem;
  /* width: 100%; */
  flex-wrap: wrap;
  div {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;
const MemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Member = ({ person, isFixedWidth }) => {
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
    <MemberStyle isFixedWidth={isFixedWidth}>
      <img src={photo} alt={name} />
      <p className="name">{name}</p>
      <p className="detail">{email}</p>
      <p className="detail">{title}</p>
      <p className="detail">{location}</p>
    </MemberStyle>
  );
};
const squadList = [...new Set(teamList.people.map(person => person.squad))];
const TeamPage = () => {
  const [view, setView] = useState('list');
  const views = ['list', 'squad', 'org'];
  const viewChange = e => {
    const clicked = e.target.value;
    setView(clicked);
  };
  const ListView = () => (
    <MemberWrapper>
      {teamList.people
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(person => (
          <Member key={person.id} person={person} />
        ))}
    </MemberWrapper>
  );
  const SquadView = () => (
    <>
      {squadList.map(squad => {
        const members = teamList.people.filter(
          person => person.squad === squad
        );
        return (
          <SquadWrapper>
            <h2 style={{ width: '100%', margin: '0 0 1rem' }}>{squad}</h2>
            {members.map(member => (
              <MemberWrapper>
                <Member person={member} isFixedWidth />
              </MemberWrapper>
            ))}
          </SquadWrapper>
        );
      })}
    </>
  );
  const ViewOptions = () => (
    <RadioStyle>
      {views.map(viewItem => (
        <label
          htmlFor={viewItem}
          key={viewItem}
          className={view === viewItem ? 'active' : ''}
        >
          <input
            type="radio"
            id={viewItem}
            name="view"
            value={viewItem}
            checked={view === viewItem}
            onChange={e => viewChange(e)}
          />
          {`${viewItem} view`}
        </label>
      ))}
    </RadioStyle>
  );
  return (
    <Layout>
      <h1>Team</h1>
      <ViewOptions />
      {view === 'list' ? <ListView /> : null}
      {view === 'squad' ? <SquadView /> : null}
    </Layout>
  );
};

export default TeamPage;
