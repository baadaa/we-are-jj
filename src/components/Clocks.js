import React, { useState, useEffect } from 'react';
import { utcToZonedTime, format } from 'date-fns-tz';
import teamList from '../data/team.json';

const peopleByZone = {
  P: [],
  M: [],
  C: [],
  E: [],
};
const Clock = () => {
  teamList.people.forEach(person => {
    const zone = format(new Date(), 'zzz', { timeZone: person.timezone });
    peopleByZone[zone[0]].push(person);
  });
  console.log(peopleByZone);
  const now = new Date();
  const timezones = [
    'America/Los_Angeles',
    'America/Denver',
    'America/Chicago',
    'America/New_York',
  ];
  const TimeStrings = ({ zone, i }) => {
    const seconds = now.getSeconds();
    const zoneIndex = ['P', 'M', 'C', 'E'];
    const timeAt = utcToZonedTime(now, zone);
    const zoneStr = format(now, 'zzz', { timeZone: zone });
    const minutes = timeAt.getMinutes();
    const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
    const hours = timeAt.getHours();
    const hoursStr = hours > 12 ? hours - 12 : hours;
    const ampm = format(timeAt, 'aa', {
      timeZone: zone,
    }).toLowerCase();
    const dayDate = format(timeAt, 'EEE', {
      timeZone: zone,
    }).toUpperCase();
    const numberDate = format(timeAt, 'MMMM dd', {
      timeZone: zone,
    });
    return (
      <div key={new Date().getMilliseconds()}>
        <br />
        <br /> {hoursStr}:{minutesStr}:{secondsStr}
        {ampm} {zoneStr}
        <br />
        {dayDate}, {numberDate}
        <br />
        <ul>
          {peopleByZone[zoneIndex[i]].map(person => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
        <br />
      </div>
    );
  };
  return (
    <div>
      {timezones.map((zone, index) => (
        <TimeStrings zone={zone} i={index} key={index} />
      ))}
    </div>
  );
};

export default Clock;
