import React, { useState, useEffect, useCallback, useRef } from 'react';
import Fuse from 'fuse.js';
import Highlight from 'react-highlighter';
import styled from 'styled-components';
import sections from '../data/glossaryContent';
import Layout from '../components/Layout';
import LetterSection from '../components/LetterSection';

const SubNavStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: visible;
  .radio {
    display: flex;
    justify-content: flex-end;
    flex-basis: 350px;
    label {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 1.2rem;
      color: var(--hp-dark-gray);
      &.active {
        color: var(--hp-indigo);
      }
    }
    input {
      cursor: pointer;
      margin-right: 0.5rem;
    }
    label + label {
      margin-left: 1rem;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      flex-basis: 110px;
      margin-left: 2rem;
      flex-shrink: 0;
      label {
        font-size: 1rem;
      }
      label + label {
        margin: 0;
      }
    }
  }
  .searchPanel {
    background: var(--hp-coolgray);
    max-width: 500px;
    width: 100%;
    overflow: visible;
  }
  button.reset {
    position: absolute;
    cursor: pointer;
    color: var(--hp-coolgray);
    top: 0;
    right: 0;
    bottom: 0;
    border: none;
    outline: none;
    background: transparent;
    transition: color 0.2s;
    font-size: 2rem;
    &:hover {
      color: var(--hp-legal-navy);
    }
  }
  .searchArea {
    width: 100%;
    overflow: visible;
    .searchField {
      position: relative;
      display: block;
    }
    .searchResultList {
      position: absolute;
      left: 0;
      top: 3rem;
      width: 100%;
      bottom: 0;
      height: 50vh;
      z-index: 99;
      opacity: 0;
      transition: opacity 0.2s, transform 0.2s;
      pointer-events: none;
      transform: translateY(-3rem);
      &[data-active='true'] {
        opacity: 1;
        transform: translateY(0);
        pointer-events: all;
        ul {
          pointer-events: all;
        }
      }
    }
    input {
      width: 100%;

      font-weight: 300;
      line-height: 1;
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      padding: 0.25rem 2rem;
      border: none;
      border-radius: 3rem;
      &:focus {
        outline: none;
        box-shadow: 0 1px 10px rgba(0, 0, 0, 0.15);
      }
    }
    ul {
      position: static;
      opacity: 1;
      box-sizing: border-box;
      max-height: 50vh;
      background: rgba(255, 255, 255, 0.85);
      overflow-y: scroll;
      box-shadow: var(--base-shadow);
      font-size: 1.5rem;
      list-style: none;
      padding: 1.5rem 2.5rem;
      transform: none;
      span,
      a span,
      span:hover,
      a span:hover {
        transform: none !important;
      }
    }
    li {
      line-height: 1.7;
    }
    a {
      text-decoration: none;
      color: var(--hp-indigo);
    }
  }
`;

const GlossaryPage = () => {
  const views = ['industry', 'internal'];
  const [view, setView] = useState('industry');
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchEl = useRef(null);
  const termsSorted = section =>
    section.terms.sort((a, b) => (a.term > b.term ? 1 : -1));
  const dict = [];

  sections.forEach(section => {
    const { letter } = section;
    termsSorted(section).forEach((term, index) => {
      const hash = letter === '#' ? 'num' : letter;
      dict.push({
        id: `#${hash}${index}`,
        term: term.term,
        category: term.category,
      });
    });
  });
  const fuse = new Fuse(dict, {
    isCaseSensitive: false,
    includeMatches: true,
    shouldSort: true,
    keys: ['term'],
  });
  const goFindItem = e => {
    if (!isSearching) return;
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.dataset.id);

    const pos = target.style.position;
    const { top } = target.style;

    // accommodate 'scrollIntoView' offset issue
    target.style.position = 'relative';
    target.style.top = '-130px';
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
    target.style.top = top;
    target.style.position = pos;
    setIsSearching(false);
  };
  const displaySearchResults = () => {
    if (searchResults.length === 0) return null;
    const list = searchResults.map(term => {
      if (term.item.category !== view) return null;
      return (
        <li key={term.item.id}>
          <a href="#" data-id={term.item.id} onClick={goFindItem}>
            <Highlight search={searchTerm}>{term.item.term}</Highlight>
          </a>
        </li>
      );
    });
    return <ul>{list}</ul>;
  };
  const handleInputChange = e => {
    setSearchTerm(e.currentTarget.value);
    if (e.currentTarget.value === '') {
      setSearchResults([]);
      setSearchTerm('');
      return;
    }
    const foundTerms = fuse.search(e.target.value);
    setSearchResults(foundTerms);
    displaySearchResults();
  };
  const resetSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };
  const checkEscape = useCallback(
    e => {
      if (!isSearching) return null;
      if (e.which === 27) {
        if (searchTerm !== '') {
          return resetSearch();
        }
        return setIsSearching(false);
      }
      if (
        e.which !== 8 &&
        e.which !== 9 &&
        e.which !== 13 &&
        e.which !== 37 &&
        e.which !== 38 &&
        e.which !== 39 &&
        e.which !== 40
      ) {
        setIsSearching(true);
        return searchEl.current.focus();
      }
    },
    [isSearching, searchTerm]
  );
  useEffect(() => {
    document.addEventListener('keydown', checkEscape, false);
    if (isSearching) {
      searchEl.current.focus();
    }
    return () => {
      document.removeEventListener('keydown', checkEscape, false);
    };
  }, [checkEscape, isSearching]);

  const viewChange = e => {
    const clicked = e.target.value;
    setView(clicked);
    if (isSearching) {
      displaySearchResults();
    }
  };
  const SubNavBlock = () => (
    <SubNavStyle>
      <div className="searchPanel">
        <div className="searchArea">
          <span className="searchField">
            <input
              type="text"
              ref={searchEl}
              placeholder="Search for terms..."
              value={searchTerm}
              onChange={handleInputChange}
              onFocus={() => setIsSearching(true)}
            />
            <button
              type="button"
              className="reset"
              onClick={() => resetSearch()}
            >
              &times;
            </button>
            <div className="searchResultList" data-active={isSearching}>
              {displaySearchResults()}
            </div>
            {/* {displaySearchResults()} */}
          </span>
        </div>
      </div>
      <div className="radio">
        {views.map(viewItem => (
          <label
            htmlFor={viewItem}
            key={viewItem}
            className={view === viewItem ? 'active' : ''}
          >
            <input
              type="radio"
              id={viewItem}
              name="view"
              value={viewItem}
              checked={view === viewItem}
              onChange={e => viewChange(e)}
            />
            {`${viewItem} terms`}
          </label>
        ))}
      </div>
    </SubNavStyle>
  );

  return (
    <Layout hasSubnav="true" subNavHeight="4rem" subNav={<SubNavBlock />}>
      <h1>Glossary</h1>
      {sections.map(section => (
        <LetterSection key={section.letter} section={section} view={view} />
      ))}
    </Layout>
  );
};

export default GlossaryPage;
