import React, { useState, useEffect } from 'react';
import { utcToZonedTime, format } from 'date-fns-tz';
import styled from 'styled-components';
import teamList from '../data/team.json';
import ClockFace from '../assets/clockface2.svg';

const peopleByZone = {
  P: [],
  M: [],
  C: [],
  E: [],
};
const clockSize = 160;
const ClockWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ClockItem = styled.div`
  flex-basis: 23.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background: #fff;
  .clockFace {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${clockSize}px;
    height: ${clockSize}px;
    padding: 2rem 0;
    border-radius: ${clockSize}px;
    background: #fff;
    /* background: var(--hp-off-white); */
    /* box-shadow: inset var(--base-shadow); */
    /* border: 1px solid #eee; */
    color: var(--hp-navy);
  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: ${clockSize}px;
    height: ${clockSize}px;
    /* transform: scale(0.9); */
  }
  .needle {
    position: absolute;
    z-index: 9;
    top: calc(50% - 2px);
    left: calc(50% - 2px);
    width: ${clockSize * 0.4}px;
    height: 4px;
    background: #333;
    border-radius: 10px;
    transform-origin: left;
    background: #fff;
    border: 1px solid var(--hp-dark-gray);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.1s;
    &.hour {
      width: ${clockSize * 0.25}px;
    }
    &.minute {
      width: ${clockSize * 0.35}px;
    }
    &.second {
      background: var(--hp-hot-orange);
      border: none;
      width: ${clockSize * 0.45}px;
      height: 2px;
      top: calc(50% - 1px);
      left: calc(50% - 1px);
    }
  }
  .center {
    position: absolute;
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.3);
    z-index: 9;
    top: calc(50% - 0.8rem);
    left: calc(50% - 0.8rem);
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 2rem;
    background: var(--hp-off-white);
    background: radial-gradient(#eee, var(--hp-off-white));
    border: 1px solid var(--hp-dark-gray);
  }
  h4,
  h5,
  h6 {
    margin: 0;
    font-weight: 400;
  }
  h4 {
    position: absolute;
    top: calc(50% + 3rem);
    left: 0;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
    span {
      font-size: 1rem;
    }
  }
  h5 {
    position: absolute;
    top: calc(50% + 2rem);
    top: 2.5rem;
    left: 0;
    font-weight: 500;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
  }
  h6 {
    position: absolute;
    top: calc(50% - 1rem);
    right: 2.5rem;
    font-size: 1rem;
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
  const TimePiece = ({ zone }) => {
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
    const secondsAngle = (seconds * 360) / 60 - 90;
    const minutesCalc = (minutes * 360) / 60;
    const hoursAngle = (hours * 360) / 12 + minutesCalc / 12 - 90;
    const minutesAngle = minutesCalc + secondsAngle / 60 - 90;
    const dayDate = format(timeAt, 'EEE', {
      timeZone: zone,
    });
    const numberDate = format(timeAt, 'MMM dd', {
      timeZone: zone,
    });
    return (
      <div className="clockFace" key={zone + new Date().getMilliseconds()}>
        <svg className="bg">
          <use xlinkHref={`#${ClockFace.id}`} />
        </svg>
        <div
          className="hour needle"
          style={{ transform: `rotate(${hoursAngle}deg)` }}
        ></div>
        <div
          className="minute needle"
          style={{ transform: `rotate(${minutesAngle}deg)` }}
        ></div>
        <div
          className="second needle"
          style={{ transform: `rotate(${secondsAngle}deg)` }}
        ></div>
        <div className="center"></div>
        <h5>{zoneStr}</h5>
        <h4>
          {hoursStr}:{minutesStr}:{secondsStr} <span>{ampm}</span>
        </h4>
        <h6>
          {numberDate}
          <br />
          {dayDate}
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
            <TimePiece zone={zone} i={index} />
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
