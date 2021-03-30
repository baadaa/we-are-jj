import React from 'react';
import styled from 'styled-components';
import { SignJ } from '../assets/icons';

const OutroSectionStyles = styled.section`
  box-sizing: border-box;
  background: var(--red800);
  height: 100vh;
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  overflow-x: hidden;
  .outroBlock {
    padding: 15px;
  }
  .graphic {
    margin-top: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .svg {
    display: inline-block;
    transition: width 0.2s, margin 0.2s;
    --width: 240px;
    --adjust: calc(var(--width) / -5);
    width: var(--width);
    flex: 0 0 var(--width);
    margin-left: var(--adjust);
    margin-right: var(--adjust);
    svg {
      width: 100%;
    }
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
  }
  p {
    margin-top: 20px;
    font-size: 17px;
    max-width: 46ch;
    line-height: 1.6;
    font-weight: 300;
  }
  @media screen and (max-width: 1300px) {
    h2 {
      font-size: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    .svg {
      --width: 200px;
    }
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
    .svg {
      --width: 180px;
    }
  }
  @media screen and (max-width: 768px) {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 15px;
    }
    .svg {
      --width: 150px;
    }
  }
  @media screen and (max-width: 640px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
    .svg {
      --width: 120px;
    }
  }
  @media screen and (max-width: 550px) {
    h2 {
      font-size: 28px;
    }
    p {
      font-size: 13px;
    }
    .svg {
      --width: 90px;
    }
  }
`;
const OutroSection = () => (
  <OutroSectionStyles>
    <div className="outroBlock">
      <h2>We stand together</h2>
      <p>
        Tight like braids on a rope,
        <br />
        loose like pebbles on a beach.
        <br />
        There whenever needed,
        <br />
        no questions asked.
      </p>
    </div>
    <div className="graphic">
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg left">
        <SignJ fill="#FFAF00" />
      </span>
      <span className="svg right">
        <SignJ fill="#C03F56" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
      <span className="svg">
        <SignJ fill="#290A14" />
      </span>
    </div>
  </OutroSectionStyles>
);

export default OutroSection;
