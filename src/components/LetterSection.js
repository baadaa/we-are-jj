import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

const LetterSectionStyle = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  box-sizing: border-box;
  box-shadow: 0 1px 2rem rgba(0, 0, 0, 0.05);
  padding: 3rem;
  background: #fff;
  margin: 3rem 0;
  border-radius: 1.5rem;
  &:first-of-type {
    margin-top: 0;
  }
  h2 {
    position: sticky;
    flex: 0 0 4rem;
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4rem;
    top: 11rem;
    box-sizing: border-box;
    text-transform: uppercase;
    margin: 0 3rem 0 0;
    background: var(--hp-off-white);
    border: 1px solid var(--hp-coolgray);
    /* box-shadow: 0 1px 15px rgba(0, 0, 0, 0.21); */
    color: var(--hp-light-blue);
    font-size: 2rem;
    @media screen and (max-width: 600px) {
      top: 11rem;
    }
  }
  h3,
  p {
    margin: 0;
  }
  h3 {
    color: var(--hp-indigo);
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    flex: 0 0 200px;
    justify-content: flex-start;
    align-items: flex-start;
    span {
      display: inline-block;
      display: none;
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      padding: 0.5rem 1rem;
      border-radius: 1rem;
      margin-top: 1rem;
      &.industry {
        background: #d0d0d0;
      }
      &.internal {
        background: var(--hp-coolgray);
      }
    }
  }
  p {
    font-size: 1.3rem;
    line-height: 1.5;
    font-weight: 300;
    margin-left: 1rem;
    color: var(--hp-dark-gray);
  }
  .defs {
    width: 100%;
  }
  .def {
    display: flex;
    align-items: flex-start;
    padding: 2.5rem 0;
    border-bottom: 3px solid var(--hp-off-white);
    &:first-of-type {
      padding-top: 0;
    }
    &:last-of-type {
      padding-bottom: 0;
      border-bottom: none;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      h3 {
        flex-basis: auto;
        width: 100%;
        margin-bottom: 1.5rem;
      }
      p {
        margin-left: 0;
      }
    }
  }
`;
const LetterSection = ({ section, view }) => {
  const hash = section.letter === '#' ? 'num' : section.letter;
  const termsSorted = section.terms.sort((a, b) => (a.term > b.term ? 1 : -1));
  if (termsSorted.filter(term => term.category === view).length === 0)
    return null;
  return (
    <LetterSectionStyle>
      <h2>{section.letter}</h2>
      <div className="defs">
        {termsSorted.map((item, index) => {
          if (item.category !== view) return null;
          return (
            <div className="def" key={`${item}${index}`}>
              <h3 id={`${hash}${index}`}>
                {item.term}
                <span className={item.category}>{item.category}</span>
              </h3>
              <p>{parse(item.meaning)}</p>
            </div>
          );
        })}
      </div>
    </LetterSectionStyle>
  );
};

export default LetterSection;
