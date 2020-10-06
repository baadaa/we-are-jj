import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Logo from '../assets/hp-logo-rgb-full-color.svg';
import NavItems from './navList.json';
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
    position: relative;
    margin: 0 auto;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1.5rem;
    padding-right: 0;
    z-index: 9;
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
  }
  ul.nav a {
    padding: 0 3rem 0 2rem;
    color: inherit;
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
  .subNav {
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    bottom: 0;
    background: var(--hp-coolgray);
    mix-blend-mode: multiply;
    height: ${props => props.subNavHeight};
    left: 0;
    right: 0;
    z-index: 0;
    transform: ${props =>
      props.subNavHeight ? `translateY(${props.subNavHeight})` : 'none'};
    .inner {
      width: 100%;
      max-width: 90rem;
      margin: 0 auto;
      padding: 0 1.5rem;
    }
  }
`;

const ToggleBtn = styled.div`
  z-index: 100;
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

const Header = ({ hasSubnav, subNavHeight, subNav }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <HeaderStyle subNavHeight={subNavHeight}>
      <header>
        <Link to="/">
          <h2>
            <svg preserveAspectRatio="xMidYMid meet" className="logo">
              <use xlinkHref={`#${Logo.id}`} />
            </svg>
            CXM
          </h2>
        </Link>
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
        <ul data-active={!isCollapsed} className="nav">
          {NavItems.navs.map((item, i) => (
            <li key={i}>
              <Link activeClassName="current" to={item.link}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </header>
      {hasSubnav ? (
        <div className="subNav">
          <div className="inner">{subNav}</div>
        </div>
      ) : null}
    </HeaderStyle>
  );
};

export default Header;
