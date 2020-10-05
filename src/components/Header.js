import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/hp-logo-rgb-full-color.svg';
import '../styles/hamburgers.css';

const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;
  background: #fff;
  box-shadow: 0 1px 1rem rgba(0, 0, 0, 0.15);
  header {
    max-width: 90rem;
    box-sizing: border-box;
    position: relative;
    margin: 0 auto;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    padding-right: 0;
  }
  h2 {
    font-size: 2.3rem;
    display: flex;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
    margin: 0;
    color: var(--hp-light-blue);
  }
  .logo {
    margin-right: 1rem;
    max-width: 13rem;
    max-height: 5rem;
  }
  ul {
    position: absolute;
    top: 0;
    right: 0;
    list-style: none;
    padding: 1rem 0;
    border-radius: 1.5rem;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    margin: 0;
    opacity: 0;
    transition: transform 0.3s, opacity 0.3s;
    pointer-events: none;
    background: #fff;
    &[data-active='true'] {
      opacity: 1;
      transform: translateY(8rem);
      pointer-events: all;
    }
  }
  li {
    padding: 1rem 0;
    font-size: 1.5rem;
    color: var(--hp-dark-gray);
  }
  a {
    text-decoration: none;
    padding: 0 3rem 0 2rem;
    color: inherit;
    box-sizing: border-box;
    /* position: relative; */
    display: block;
    transition: color 0.2s;
    border-left: transparent 5px solid;
    span {
      transition: transform 0.2s;
    }
    &.current {
      border-left-color: var(--hp-light-blue);
      color: var(--hp-navy);
    }
    &:hover {
      span {
        display: inline-block;
        transform: translateX(-2px);
      }
      color: var(--hp-navy);
    }
  }
`;

const ToggleBtn = styled.div`
  /* position: absolute; */
  z-index: 100;
  box-sizing: border-box;
  button {
    transform: scale(0.8);
    transition: all 0.2s;
    border-radius: 1rem;
  }
  button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(13, 155, 213, 0.1);
  }
  @media screen and (max-width: 992px) {
    display: block;
  }
`;

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <HeaderStyle>
      <header>
        <h2>
          <svg preserveAspectRatio="xMidYMid meet" className="logo">
            <use xlinkHref={`#${Logo.id}`} />
          </svg>
          CXM
        </h2>
        <ToggleBtn>
          <button
            className={
              !isCollapsed
                ? 'hamburger hamburger--spring is-active'
                : 'hamburger hamburger--spring'
            }
            onClick={() => setIsCollapsed(!isCollapsed)}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </ToggleBtn>
        <ul data-active={!isCollapsed}>
          <li>
            <Link activeClassName="current" to="/">
              <span>Clocks</span>
            </Link>
          </li>
          <li>
            <Link activeClassName="current" to="/team">
              <span>Team</span>
            </Link>
          </li>
          {/* <li>
            <Link activeClassName="current" to="/team">
              <span>Coffee</span>
            </Link>
          </li> */}
        </ul>
      </header>
    </HeaderStyle>
  );
};

export default Header;
