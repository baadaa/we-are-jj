import React, { useState, useEffect } from 'react';
import { utcToZonedTime, format } from 'date-fns-tz';
import styled from 'styled-components';
import teamList from '../data/team.json';

const peopleByZone = {
  P: [],
  M: [],
  C: [],
  E: [],
};

const ClockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ClockItem = styled.div`
  flex-basis: 23%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #fff;
  .clockFace {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 13rem;
    height: 13rem;
    padding: 2rem 0;
    border-radius: 13rem;
    background: #fff;
    background: var(--hp-off-white);
    box-shadow: inset var(--base-shadow);
    color: var(--hp-navy);
  }
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 400;
  }
  h4 {
    font-size: 2rem;
    font-weight: 700;
    margin: 0.5rem 0;
    span {
      font-size: 1.5rem;
    }
  }
  h5 {
    margin-top: -1rem;
    font-size: 1.3rem;
  }
  h6 {
    font-size: 1.1rem;
  }
  border-radius: 1.5rem;
  box-shadow: var(--base-shadow);

  @media screen and (max-width: 768px) {
    flex-basis: 49%;
    margin-bottom: 2%;
  }
  @media screen and (max-width: 550px) {
    flex-basis: 100%;
    margin-bottom: 2%;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 2rem 0 0;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 150px;
  }
  li {
    flex-basis: 33%;
    text-align: center;
    margin-bottom: 3%;
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.2);
    }
    img {
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 4rem;
      object-fit: cover;
    }
  }
`;

teamList.people.forEach(person => {
  const zone = format(new Date(), 'zzz', { timeZone: person.timezone });
  peopleByZone[zone[0]].push(person);
});
const Clock = () => {
  const [now, setNow] = useState(new Date());
  const tick = () => {
    setNow(new Date());
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanUp() {
      clearInterval(timerID);
    };
  });
  const timezones = [
    'America/Los_Angeles',
    'America/Denver',
    'America/Chicago',
    'America/New_York',
  ];
  const TimeStrings = ({ zone }) => {
    const timeAt = utcToZonedTime(now, zone);
    const zoneStr = format(now, 'zzz', { timeZone: zone });
    const hours = timeAt.getHours();
    const hoursStr = hours > 12 ? hours - 12 : hours;
    const minutes = timeAt.getMinutes();
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = now.getSeconds();
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const ampm = format(timeAt, 'aa', {
      timeZone: zone,
    });
    const dayDate = format(timeAt, 'EEE', {
      timeZone: zone,
    });
    const numberDate = format(timeAt, 'MMMM dd', {
      timeZone: zone,
    });
    return (
      <div className="clockFace" key={zone + new Date().getMilliseconds()}>
        <h5>{zoneStr}</h5>
        <h4>
          {hoursStr}:{minutesStr}:{secondsStr} <span>{ampm}</span>
        </h4>
        <h6>
          {numberDate} • {dayDate}
        </h6>
      </div>
    );
  };
  return (
    <ClockWrapper>
      {timezones.map((zone, index) => {
        const zoneIndex = ['P', 'M', 'C', 'E'];

        return (
          <ClockItem key={index}>
            <TimeStrings zone={zone} i={index} />
            <ul>
              {peopleByZone[zoneIndex[index]].map(person => (
                <li key={person.id}>
                  <img
                    src={person.photo}
                    alt={`${person.name} - ${person.location}`}
                    title={`${person.name} - ${person.location}`}
                  />
                </li>
              ))}
            </ul>
          </ClockItem>
        );
      })}
    </ClockWrapper>
  );
};

export default Clock;
