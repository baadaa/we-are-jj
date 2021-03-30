import React from 'react';
import styled from 'styled-components';
import { Rectangle, Circle } from '../assets/icons';

const IntroSectionStyles = styled.section`
  box-sizing: border-box;
  background: var(--black);
  min-height: 100vh;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  .introBlock {
    padding: 15px;
  }
  h2,
  p {
    margin: 0;
    transition: font-size 0.2s;
  }
  h2 {
    font-weight: 300;
    font-size: 42px;
    margin: 0.6em 0 0.3em;
    span {
      font-weight: 500;
    }
  }
  p {
    margin-top: 20px;
    font-size: 17px;
    max-width: 46ch;
    line-height: 1.6;
    font-weight: 300;
  }
  .circle,
  .rectangle {
    position: absolute;
  }
  .circle.one {
    top: 5vw;
    left: 30vw;
    width: 5vw;
  }
  .circle.two {
    bottom: 10vw;
    right: 20vw;
    width: 3vw;
  }
  .rectangle.one {
    bottom: 0;
    left: 0;
    width: 30vw;
    transform: rotate(15.2deg) translateX(-10vw) translateY(-5vw);
  }
  .rectangle.two {
    top: 0;
    right: 0;
    width: 30vw;
    transform: rotate(-20.5deg) translateX(10vw) translateY(10vw);
  }
  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 40px;
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
  }
  @media screen and (max-width: 1000px) {
    h2 {
      font-size: 35px;
    }
    p {
      font-size: 16.5px;
    }
    .rectangle.one {
      width: 40vw;
      transform: rotate(15.2deg) translateX(-25vw) translateY(0vw);
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 15px;
    }
  }
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
    .rectangle.one {
      width: 50vw;
      transform: rotate(15.2deg) translateX(-45vw) translateY(0vw);
    }
  }
  @media screen and (max-width: 550px) {
    .circle.one {
      width: 30px;
      top: 70px;
    }
    .circle.two {
      width: 50px;
      bottom: 80px;
    }
    .rectangle.one {
      width: 50vw;
      transform: rotate(15.2deg) translateX(-45vw) translateY(5vw);
    }
    .rectangle.two {
      width: 50vw;
      transform: rotate(-20.5deg) translateX(30vw) translateY(20vw);
    }
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 13px;
    }
  }
`;
const IntroSection = () => (
  <IntroSectionStyles>
    <div className="introBlock">
      <h2>Accidental fraternity</h2>
      <p>
        We are a group of eleven, not by design but by accident. With eclectic
        day jobs across many industries, we bring eccentric tastes and expertise
        to accomplish great things together—from personal to professional
        matters. We are friends, brothers, comrades and a family.
      </p>
      <Circle fill="#FFB000" className="circle one" />
      <Circle fill="#79BF42" className="circle two" />
      <Rectangle fill="#7C1D3D" className="rectangle one" />
      <Rectangle fill="#1E607B" className="rectangle two" />
    </div>
  </IntroSectionStyles>
);

export default IntroSection;
