import React from 'react';
import styled from 'styled-components';
import {
  IconMedical,
  IconSW,
  IconFinance,
  IconMedia,
  IconCreative,
  IconEnvironment,
} from '../assets/icons';

const ExpertiseSectionStyles = styled.section`
  box-sizing: border-box;
  background: var(--blue800);
  min-height: 100vh;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 15px;
  color: #fff;
  h2,
  h3,
  p {
    margin: 0;
    transition: font-size 0.2s;
  }
  h2 {
    font-weight: 300;
    font-size: 42px;
    margin: 0 0 1em;
  }
  h3 {
    font-size: 24px;
    font-weight: 400;
    line-height: 1.6;
  }
  p {
    font-size: 15px;
    line-height: 1.6;
    font-weight: 300;
  }
  ul {
    text-align: left;
    width: 100%;
    max-width: 900px;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  li {
    width: 48%;
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
  }
  svg {
    width: 64px;
    flex: 0 0 64px;
    margin-right: 1.8rem;
  }

  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 40px;
    }
    h3 {
      font-size: 22px;
    }
    p {
      font-size: 14.5px;
    }
    svg {
      width: 55px;
      flex: 0 0 55px;
      margin-right: 1.8rem;
    }
  }
  @media screen and (max-width: 1200px) {
    h2 {
      /* font-size: 38px; */
    }
  }
  @media screen and (max-width: 1100px) {
    h2 {
      font-size: 38px;
    }
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 35px;
    }
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
  @media screen and (max-width: 768px) {
    svg {
      width: 45px;
      flex: 0 0 45px;
      margin-right: 1.8rem;
    }
    h2 {
      font-size: 32px;
    }
    h3 {
      font-size: 17.5px;
    }
    p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 640px) {
    ul {
      max-width: 330px;
    }
    li {
      width: 100%;
      flex-basis: 100%;
    }
    h2 {
      font-size: 30px;
    }
  }
  @media screen and (max-width: 550px) {
    ul {
      max-width: 310px;
    }
    svg {
      width: 40px;
      flex: 0 0 40px;
      margin-right: 1.8rem;
    }
    h3 {
      font-size: 16px;
    }
    h2 {
      font-size: 28px;
      margin: 1em 0 0.5em;
    }
    p {
      font-size: 12px;
    }
  }
`;
const expertise = [
  {
    h3: 'Medical',
    p: 'Anesthesiology (MD), Dialysis (RN)',
    icon: <IconMedical />,
  },
  {
    h3: 'S/W Engineering',
    p: 'Full-stack development, UX/UI design',
    icon: <IconSW />,
  },
  {
    h3: 'Finance',
    p: 'Audit engagement, CAMS/Compliance',
    icon: <IconFinance />,
  },
  {
    h3: 'Media & Arts',
    p: 'DJ, production, rap, illustration',
    icon: <IconMedia />,
  },
  {
    h3: 'Creative',
    p: 'Art direction, visual & motion design',
    icon: <IconCreative />,
  },
  {
    h3: 'Environment',
    p: 'Architecture, interior design',
    icon: <IconEnvironment />,
  },
];
const ExpertiseSection = () => (
  <ExpertiseSectionStyles>
    <div className="introBlock">
      <h2>Areas of expertise</h2>
      <ul>
        {expertise.map((item, index) => (
          <li key={index}>
            {item.icon}
            <div>
              <h3>{item.h3}</h3>
              <p>{item.p}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </ExpertiseSectionStyles>
);

export default ExpertiseSection;
