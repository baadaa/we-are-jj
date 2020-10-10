import React, { useState, useEffect, useCallback } from 'react';
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
const SquadWrapper = styled.div`
  display: flex;
  background: #fff;
  border-radius: 1rem;
  padding: 2rem 2rem 1rem;
  box-shadow: var(--base-shadow);
  margin: 2rem 0;
  justify-content: space-between;
  flex-wrap: wrap;
  div {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;
const MemberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem 0;
  justify-content: space-between;
`;
const MemberStyle = styled.article`
  border-radius: 1rem;
  box-shadow: ${props =>
    props.shadow === 'inset'
      ? 'inset var(--base-shadow)'
      : 'var(--base-shadow)'};
  background: ${props =>
    props.shadow === 'inset' ? 'var(--hp-off-white)' : '#fff'};
  flex-basis: 49%;
  width: 49%;
  margin-bottom: 2%;
  padding: 2rem;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  p {
    margin: 0;
    /* text-align: center; */
    &.name {
      margin-bottom: 1rem;
    }
    &.detail {
      font-size: 1.2rem;
      color: var(--hp-dark-gray);
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
    margin-right: 1.5rem;
  }
  &:hover {
    transform: ${props =>
      props.shadow === 'inset' ? 'translateY(1px)' : 'translateY(-1px)'};
    box-shadow: ${props =>
      props.shadow === 'inset'
        ? 'inset var(--hover-shadow)'
        : 'var(--hover-shadow)'};
  }
  @media screen and (max-width: 648px) {
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
`;
const Member = ({ person, click, shadow }) => {
  const { name, title, location, photo } = person;
  return (
    <MemberStyle shadow={shadow} onClick={() => click(person)}>
      <img src={photo} alt={name} />
      <div className="text">
        <p className="name">{name}</p>
        <p className="detail">{title}</p>
        <p className="detail">{location}</p>
      </div>
    </MemberStyle>
  );
};
const DetailProfileStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.85);
  transition: opacity 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  overflow-y: scroll;
  transform: translateX(-100vw);
  opacity: 0;
  &[data-visible='true'] {
    transform: translateX(0);
    opacity: 1;
  }
  .card {
    position: relative;
    max-width: 330px;
    width: 100%;
    background: #fff;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border-radius: 1.5rem;
    box-shadow: var(--base-shadow);
  }
  .team {
    position: absolute;
    top: 0rem;
    left: 1.5rem;
    height: 2rem;
    padding: 0 1rem;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    transform: translateY(-2rem);
    font-weight: 700;
    background: var(--hp-gold);
    color: var(--hp-navy);
    box-shadow: var(--base-shadow);
    &[data-bg='0'] {
      background: var(--hp-hot-orange);
      color: #fff;
    }
    &[data-bg='1'] {
      background: var(--hp-gold);
      color: var(--hp-navy);
    }
    &[data-bg='2'] {
      background: var(--hp-yellow);
      color: var(--hp-navy);
    }
    &[data-bg='3'] {
      background: var(--hp-green);
      color: var(--hp-navy);
    }
    &[data-bg='4'] {
      background: var(--hp-turquoise);
      color: var(--hp-navy);
    }
    &[data-bg='5'] {
      background: var(--hp-light-blue);
      color: var(--hp-navy);
    }
  }
  h3 {
    font-weight: 500;
    font-size: 1.6rem;
    margin: 1rem 0;
    text-align: center;
    span {
      font-weight: 200;
    }
    span::before {
      content: ' (';
    }
    span::after {
      content: ')';
    }
  }
  p {
    font-size: 1.3rem;
    margin: 0;
    text-align: center;
  }
  p + p {
    margin-top: 0.5rem;
  }
  img {
    max-width: 12rem;
    border-radius: 12rem;
  }
  a {
    text-decoration: none;
    color: var(--hp-hot-orange);
    &:hover {
      text-decoration: underline;
    }
  }
  .reportingTo {
    margin-top: 1.5rem;
    font-size: 1.2rem;
    button {
      border: none;
      background: transparent;
      outline: none;
      font-size: 1.3rem;
      padding: 0;
      color: var(--hp-hot-orange);
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .close {
    position: absolute;
    cursor: pointer;
    top: 0;
    background: transparent;
    border: none;
    outline: none;
    font-size: 2.5rem;
    color: #fff;
    right: 1rem;
    width: 3rem;
    height: 3rem;
    transform: translateY(-3rem);
  }
`;

const squadList = [...new Set(teamList.people.map(person => person.squad))];
const TeamPage = () => {
  const [view, setView] = useState('list');
  const [isDetailed, setIsDetailed] = useState(false);
  const [currentPerson, setCurrentPerson] = useState(teamList.people[0]);
  const memberDetail = ({ id }) => {
    setCurrentPerson(teamList.people.find(person => person.id === id));
    setIsDetailed(true);
  };

  const views = ['list', 'squad', 'org'];
  const viewChange = e => {
    const clicked = e.target.value;
    setView(clicked);
  };
  const sortedPeople = [...teamList.people].sort((a, b) =>
    a.name > b.name ? 1 : -1
  );
  const changeIndex = useCallback(
    option => {
      const currentIndex = sortedPeople.indexOf(currentPerson);
      if (option === 'next' && currentIndex === sortedPeople.length - 1) {
        return 0;
      }
      if (option === 'next' && currentIndex !== sortedPeople.length - 1) {
        return currentIndex + 1;
      }
      if (option === 'prev' && currentIndex === 0) {
        return sortedPeople.length - 1;
      }
      if (option === 'prev' && currentIndex !== 0) {
        return currentIndex - 1;
      }
    },
    [currentPerson, sortedPeople]
  );

  const checkKey = useCallback(
    e => {
      const keyList = [27, 37, 39]; // ESC, left, right;
      if (!isDetailed || keyList.indexOf(e.which) === -1) return null;
      let newIndex;
      switch (e.which) {
        case 27:
          return setIsDetailed(false);
        case 37:
          newIndex = changeIndex('prev');
          break;
        case 39:
          newIndex = changeIndex('next');
          break;
        default:
          break;
      }
      setCurrentPerson(sortedPeople[newIndex]);
    },
    [changeIndex, isDetailed, sortedPeople]
  );
  useEffect(() => {
    document.addEventListener('keydown', checkKey, false);
    return () => {
      document.removeEventListener('keydown', checkKey, false);
    };
  });
  const ListView = () => (
    <MemberWrapper>
      {[...teamList.people]
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map(person => (
          <Member key={person.id} person={person} click={memberDetail} />
        ))}
    </MemberWrapper>
  );
  const SquadView = () => (
    <>
      {squadList.map((squad, i) => {
        const members = teamList.people.filter(
          person => person.squad === squad
        );
        return (
          <SquadWrapper key={i}>
            <h2 style={{ width: '100%', margin: '0 0 1rem' }}>{squad}</h2>
            {members.map(member => (
              <Member
                person={member}
                key={member.id}
                click={memberDetail}
                shadow="inset"
              />
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
      <DetailProfileStyle data-visible={isDetailed}>
        <div className="card">
          <button
            type="button"
            className="close"
            onClick={() => setIsDetailed(false)}
          >
            &times;
          </button>
          <img src={currentPerson.photo} alt={currentPerson.name} />
          <div
            className="team"
            data-bg={squadList.indexOf(currentPerson.squad)}
          >
            {currentPerson.squad}
          </div>
          <h3>
            {currentPerson.name}
            <span>{currentPerson.nickname}</span>
          </h3>
          <p>{currentPerson.title}</p>
          <p>{currentPerson.location}</p>
          <p>
            <a href={`mailto:${currentPerson.email}`}>{currentPerson.email}</a>
          </p>
          <span
            style={{ display: currentPerson.manager ? '' : 'none' }}
            className="reportingTo"
          >
            Reports to{' '}
            <button
              type="button"
              onClick={() =>
                setCurrentPerson(
                  teamList.people.filter(
                    person => person.name === currentPerson.manager
                  )[0]
                )
              }
            >
              {currentPerson.manager}
            </button>
          </span>
        </div>
      </DetailProfileStyle>
    </Layout>
  );
};

export default TeamPage;
