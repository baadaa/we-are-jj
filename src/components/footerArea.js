import React from 'react';
import styled from 'styled-components';
import { SignJ } from '../assets/icons';

const FooterStyles = styled.footer`
  box-sizing: border-box;
  background: var(--black);
  padding: 50px 30px 100px;
  position: relative;
  color: #fff;
  .wrapper {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }
  .logo {
    display: inline-block;
    text-align: center;
    @media screen and (max-width: 480px) {
      margin-bottom: 20px;
    }
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
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 480px) {
      max-width: 120px;
      margin: 0 auto;
    }
  }
  a {
    color: inherit;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  li {
    width: 25%;
    flex-basis: 25%;
    line-height: 1.6;
    @media screen and (max-width: 480px) {
      width: 50%;
      flex-basis: 50%;
    }
  }
`;
const jj = [
  {
    name: 'Allen',
    link: 'https://www.linkedin.com/in/allen-chun-cpa-70732b15/',
  },
  {
    name: 'Andew',
    link: 'http://andrew-lee.squarespace.com/',
  },
  {
    name: 'B',
    link: 'http://bald.design/',
  },
  {
    name: 'Ed',
    link: 'https://www.linkedin.com/in/ed-suh-3284a517/',
  },
  {
    name: 'Edward',
    link: 'https://www.linkedin.com/in/hyoungtae-edward-kwon-1a448743/',
  },
  {
    name: 'Hal',
    link: 'https://www.linkedin.com/in/hal-choi-21a95959/',
  },
  {
    name: 'Hoon',
    link: 'https://www.linkedin.com/in/hoonrhee/',
  },
  {
    name: 'Kevin',
    link: 'https://www.linkedin.com/in/hongyeol-kevin-jeon-328043b4/',
  },
  {
    name: 'Paul',
    link: 'https://www.linkedin.com/in/paul-lee-2b445734/',
  },
  {
    name: 'Suho',
    link: 'https://www.linkedin.com/in/suhosong/',
  },
  {
    name: 'Young',
    link: 'http://www.youngjinlim.com/',
  },
];
const Footer = () => (
  <FooterStyles>
    <div className="wrapper">
      <div className="logo">
        <div className="graphic">
          <span className="svg left">
            <SignJ fill="#FFAF00" />
          </span>
          <span className="svg right">
            <SignJ fill="#C03F56" />
          </span>
        </div>
        &copy; {new Date().getFullYear()} by JJ
      </div>
      <ul>
        {jj.map((person, index) => (
          <li key={index}>
            <a href={person.link} target="_blank" rel="noreferrer noopener">
              {person.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </FooterStyles>
);

export default Footer;
