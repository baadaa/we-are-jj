import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { SignJ } from '../assets/icons';

const HeaderStyles = styled.header`
  box-sizing: border-box;
  background: var(--black);
  padding: 30px 15px 15px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  z-index: 99;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: flex-end;
  }
  .logo {
    display: inline-block;
    text-align: center;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .graphic {
    display: flex;
    justify-content: center;
  }
  .svg {
    margin-bottom: 10px;
    display: block;
    transition: width 0.2s, margin 0.2s;
    --width: 75px;
    --adjust: calc(var(--width) / -5);
    width: var(--width);
    svg {
      width: 100%;
    }
    &.left {
      margin-right: var(--adjust);
    }
    &.right {
      margin-left: var(--adjust);
    }
    @media screen and (max-width: 550px) {
      --width: 40px;
    }
  }
  ul {
    list-style: none;
    padding: 15px;
    margin: 0;
    position: absolute;
    background: #000;
    top: 80px;
    right: 0;
    min-width: 150px;
    max-width: 180px;
    border-radius: 15px;
    transition: top 0.2s;
    display: flex;
    flex-wrap: wrap;
    transition: transform 0.2s, opacity 0.2s;
    transform: translateY(-20px);
    opacity: 0;
    pointer-events: none;
    &[data-open='true'] {
      opacity: 1;
      pointer-events: all;
      transform: translateY(0);
    }
    a {
      color: inherit;
      display: block;
      text-decoration: none;
    }
    li {
      font-size: 15px;
      padding: 5px 10px;
      transition: background-color 0.2s, color 0.2s;
    }
    .section {
      flex-basis: 100%;
      padding: 15px 10px;
      &:first-of-type:hover {
        background-color: var(--blue800);
      }
    }
    .member {
      text-align: left;
      flex-basis: 50%;
      font-size: 12px;
      color: #777;
      &:hover {
        color: #fff;
        background-color: var(--blue800);
      }
    }
    @media screen and (max-width: 550px) {
      top: 50px;
    }
  }
`;
const jj = [
  {
    name: 'Allen',
    link: '/allen',
  },
  {
    name: 'Andew',
    link: '/andrew',
  },
  {
    name: 'B',
    link: '/b',
  },
  {
    name: 'Ed',
    link: '/ed',
  },
  {
    name: 'Edward',
    link: '/edward',
  },
  {
    name: 'Hal',
    link: '/hal',
  },
  {
    name: 'Hoon',
    link: '/hoon',
  },
  {
    name: 'Kevin',
    link: '/kevin',
  },
  {
    name: 'Paul',
    link: '/paul',
  },
  {
    name: 'Suho',
    link: '/suho',
  },
  {
    name: 'Young',
    link: '/young',
  },
];
const Header = ({ location }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <HeaderStyles>
      <div className="wrapper">
        <button
          type="button"
          className="logo"
          onClick={() => setMenuIsOpen(!menuIsOpen)}
        >
          <div className="graphic">
            <span className="svg left">
              <SignJ fill="#FFAF00" />
            </span>
            <span className="svg right">
              <SignJ fill="#C03F56" />
            </span>
          </div>
        </button>
        <ul data-open={menuIsOpen}>
          <li className="section">
            <Link to="/">Introduction</Link>
          </li>
          <li className="section" style={{ paddingBottom: '10px' }}>
            Members
          </li>
          {jj.map((person, index) => (
            <li
              className="member"
              key={index}
              style={{
                backgroundColor:
                  location === person.link ? 'var(--red800)' : '',
                color: location === person.link ? '#fff' : '',
              }}
            >
              <Link to={person.link}>{person.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </HeaderStyles>
  );
};

export default Header;
