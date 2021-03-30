import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { SignJ } from '../assets/icons';

const HeroSectionStyles = styled.section`
  box-sizing: border-box;
  background: var(--black);
  height: 100vh;
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
  h1,
  p {
    margin: 0;
    transition: font-size 0.2s;
  }
  h1 {
    font-weight: 300;
    font-size: 60px;
    margin: 0.6em 0 0.3em;
    span {
      font-weight: 500;
    }
  }
  p {
    font-size: 27px;
    font-weight: 300;
    opacity: 0.7;
  }
  .graphic {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .svg {
    display: block;
    transition: width 0.2s, margin 0.2s;
    --width: 313px;
    --width: 313px;
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
  .hand {
    position: absolute;
    bottom: 30px;
    width: 40vw;
    background: transparent;
    z-index: 0;
    transition: width 0.2s, transform 0.2s;
    &.right {
      right: 0;
    }
    &.left {
      left: 0;
      transform: scaleX(-1);
    }
  }
  @media screen and (max-width: 1300px) {
    .svg {
      --width: 300px;
    }
    h1 {
      font-size: 55px;
    }
    p {
      font-size: 25px;
    }
    .hand {
      width: 532px;
      &.right {
        transform: rotate(5deg);
        right: -30px;
      }
      &.left {
        transform: scaleX(-1) rotate(5deg);
        left: -30px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .svg {
      --width: 280px;
    }
    h1 {
      font-size: 50px;
    }
    p {
      font-size: 23.5px;
    }
    .hand {
      width: 482px;
      &.right {
        transform: rotate(10deg);
        right: -30px;
      }
      &.left {
        transform: scaleX(-1) rotate(10deg);
        left: -30px;
      }
    }
  }
  @media screen and (max-width: 1100px) {
    .svg {
      --width: 250px;
    }
    h1 {
      font-size: 45px;
    }
    p {
      font-size: 22px;
    }
    .hand {
      width: 432px;
      &.right {
        transform: rotate(10deg);
        right: -30px;
      }
      &.left {
        transform: scaleX(-1) rotate(10deg);
        left: -30px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    justify-content: flex-start;
    align-items: flex-start;
    padding-top: 40px;
    padding-left: 40px;
    .graphic {
      justify-content: flex-start;
    }
    .svg {
      --width: 220px;
    }
    h1 {
      font-size: 42px;
    }
    p {
      font-size: 20px;
    }
    .hand {
      width: 600px;
      &.right {
        transform: rotate(15deg);
        right: -50px;
      }
      &.left {
        display: none;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding-top: 20px;
    padding-left: 20px;
    .svg {
      --width: 200px;
    }
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
    .hand {
      width: 500px;
      &.right {
        transform: rotate(20deg);
        right: -50px;
      }
    }
  }
  @media screen and (max-width: 640px) {
    .svg {
      --width: 180px;
    }
    h1 {
      font-size: 34px;
    }
    p {
      font-size: 17px;
    }
    .hand {
      width: 500px;
      &.right {
        transform: rotate(25deg);
        right: -100px;
      }
    }
  }
  @media screen and (max-width: 550px) {
    align-items: center;
    padding-top: 15vw;
    .svg {
      --width: 150px;
    }
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 15px;
    }
    .hand {
      width: 500px;
      &.right {
        transform: rotate(45deg);
        right: -200px;
      }
    }
  }
`;
const HeroSection = () => (
  <HeroSectionStyles>
    <div className="introBlock">
      <div className="graphic">
        <span className="svg left">
          <SignJ fill="#FFAF00" />
        </span>
        <span className="svg right">
          <SignJ fill="#C03F56" />
        </span>
      </div>
      <h1>
        We are <span>JJ</span>
      </h1>
      <p>
        A <em>not-so-secret</em> society of expats
      </p>
    </div>
    <div className="hand right">
      <StaticImage
        src="../assets/ave-calvar-5u4L-E4eQWw-unsplash-hand.png"
        alt="A hand"
        placeholder="blurred"
      />
    </div>
    <div className="hand left">
      <StaticImage
        src="../assets/ave-calvar-5u4L-E4eQWw-unsplash-hand.png"
        alt="A hand"
        placeholder="blurred"
      />
    </div>
  </HeroSectionStyles>
);

export default HeroSection;
