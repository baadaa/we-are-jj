import React, { useState } from 'react';
import styled from 'styled-components';
import Homepoint from '../assets/logo';
import Layout from '../components/Layout';
import { Portal, Tasks } from '../assets/icons';

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #fff;
  font-weight: 500;
  margin-bottom: 25px;
  @media screen and (max-width: 360px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 10px;
    svg {
      margin-bottom: 5px;
    }
  }
`;

const Box = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 350px;
  background: #fff;
  border-radius: 12px;
  font-size: 15px;
  padding: 25px;
  /* height: 400px; */
  z-index: 99;
  .question1 {
    display: flex;
    justify-content: space-between;
    label {
      flex-basis: 48%;
      border: 1px solid var(--hp-coolgray);
      padding: 15px;
      border-radius: 10px;
      font-size: 14px;
      line-height: 1.3;
      color: var(--hp-dark-gray);
      cursor: pointer;
      input {
        display: block;
        margin-right: 10px;
      }
      div {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
      }
      svg {
        fill: var(--hp-medium-gray);
        width: 50px;
        height: 50px;
        display: block;
        margin-bottom: 5px;
      }
      &.selected {
        border-color: var(--hp-light-blue);
        color: var(--hp-navy);
        background-color: #eaf6fa;
        svg {
          fill: var(--hp-light-blue);
        }
      }
    }
  }
  h2,
  h3 {
    font-weight: 500;
    font-size: 14px;
    text-align: center;
    color: var(--hp-navy);
  }
  h3 {
    opacity: 0.6;
    margin: 0 0 10px;
    /* color: var(--hp-hot-orange); */
  }
  h2 {
    margin: 0 0 15px;
    font-size: 17px;
  }
  button {
    width: 100%;
    margin: 5px 0;
    border: none;
    outline: none;
    background: var(--hp-green);
    padding: 10px;
    color: var(--hp-indigo);
    border-radius: 30px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--hover-shadow);
    }
    &[disabled] {
      background: var(--hp-coolgray);
      cursor: not-allowed;
      &:hover {
        transform: none;
        box-shadow: none;
      }
    }
    &[data-selected='true'] {
      background: var(--hp-light-blue);
    }
  }

  .secondQuestion {
    margin-top: 20px;
    padding: 15px;
    background-color: var(--hp-off-white);
    border-radius: 15px;
    select {
      width: 100%;
      padding: 5px 10px;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
`;
const IndexPage = () => {
  const [answer1, setAnswer1] = useState(undefined);
  const [portalChannelOption, setPortalChannelOption] = useState(undefined);
  const [taskSelectionOption, setTaskSelectionOption] = useState(undefined);
  const handleQuestion1 = e => {
    const selected = e.target.value;
    setAnswer1(selected);
    setPortalChannelOption(undefined);
    setTaskSelectionOption(undefined);
  };
  const handlePortalQuestion = e => {
    const selected = e.target.value;
    if (selected === '0') {
      setPortalChannelOption(undefined);
    } else {
      setPortalChannelOption(selected);
    }
  };
  const handleTaskQuestion = e => {
    const selected = e.target.value;
    if (selected === '0') {
      setTaskSelectionOption(undefined);
    } else {
      setTaskSelectionOption(selected);
    }
  };
  const portalLinks = {
    broker: 'https://portal.hpfctpo.com/#/login',
    del: 'https://google.com',
    nondel: 'https://portal.hpfctpo.com/#/login',
  };
  const taskLinks = {
    loanDoc: 'https://loandocumentupload-dev.azurewebsites.net/',
    payoff: 'https://payoff-request.homepointfinancial.com/',
    calc: 'https://toolkit.homepoint.design',
  };
  return (
    <Layout>
      <HeaderStyles>
        <Homepoint
          color="#fff"
          dot="var(--hp-light-blue)"
          style={{ width: '140px', marginRight: '10px' }}
        />
        Partner Directory
      </HeaderStyles>
      <Box>
        <h2>How can we help you today?</h2>
        <div className="question1">
          <label
            htmlFor="optionPortal"
            className={answer1 === 'portal' ? 'selected' : ''}
          >
            <input
              type="radio"
              id="optionPortal"
              value="portal"
              name="question1"
              onChange={handleQuestion1}
            />
            <div>
              <Portal />
              Log into
              <br />a portal
            </div>
          </label>
          <label
            htmlFor="optionQuick"
            className={answer1 === 'quick' ? 'selected' : ''}
          >
            <input
              type="radio"
              id="optionQuick"
              value="quick"
              name="question1"
              onChange={handleQuestion1}
            />
            <div>
              <Tasks style={{ width: '45px' }} />
              Access
              <br />
              quick tools
            </div>
          </label>
        </div>
        {answer1 === 'portal' && (
          <div className="secondQuestion">
            <h3>Which channel are you logging into?</h3>
            <select
              name="portalChannel"
              id="portalChannel"
              placeholder="Select a channel"
              onChange={handlePortalQuestion}
            >
              <option value="0">Select a channel</option>
              <option value="broker">Wholesale Broker</option>
              <option value="del">Delegated Correspondent</option>
              <option value="nondel">Non-delegated Correspondent</option>
            </select>
            <a
              href={portalLinks[portalChannelOption]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" disabled={!portalChannelOption}>
                GO
              </button>
            </a>
          </div>
        )}
        {answer1 === 'quick' && (
          <div className="secondQuestion">
            <h3>What do you want to do?</h3>
            <select
              name="taskSelection"
              id="taskSelection"
              placeholder="Select a task"
              onChange={handleTaskQuestion}
            >
              <option value="0">Select a task</option>
              <option value="loanDoc">Upload loan docuements</option>
              <option value="payoff">Get a payoff quote</option>
              <option value="calc">Access calculators</option>
            </select>
            <a
              href={taskLinks[taskSelectionOption]}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" disabled={!taskSelectionOption}>
                GO
              </button>
            </a>
          </div>
        )}
      </Box>
    </Layout>
  );
};
export default IndexPage;
