import React from 'react';
import styled from 'styled-components';
import { GatsbyImage } from 'gatsby-plugin-image';
import {
  FaHome,
  FaLinkedin,
  FaGithubSquare,
  FaBehanceSquare,
  FaVimeoSquare,
} from 'react-icons/fa';
import { ImSoundcloud2 } from 'react-icons/im';

const socialIcons = {
  site: <FaHome />,
  linkedin: <FaLinkedin />,
  github: <FaGithubSquare />,
  vimeo: <FaVimeoSquare />,
  behance: <FaBehanceSquare />,
  soundcloud: <ImSoundcloud2 />,
};
const SummarySectionStyles = styled.section`
  max-width: var(--resume-width);
  margin: 0 auto 50px;
  .basic {
    display: flex;
    align-items: center;
  }
  .headshot {
    --base-size: 180px;
    width: var(--base-size);
    height: var(--base-size);
    flex-basis: var(--base-size);
    flex-shrink: 0;
    margin-right: calc(var(--base-size) / 6);
    border-radius: var(--base-size);
    overflow: hidden;
  }
  h1,
  h2,
  p {
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 10px 0 0;
    padding: 0;
  }
  li {
    display: inline;
    font-size: 20px;
    a {
      color: inherit;
      opacity: 0.4;
      transition: opacity 0.2s;
      &:hover {
        opacity: 1;
      }
    }
  }
  li + li {
    margin-left: 5px;
  }
  h1 {
    font-size: 56px;
    font-weight: 300;
    margin-bottom: 0.2em;
  }
  h2 {
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 0.5em;
  }
  p {
    font-weight: 300;
    line-height: 1.5;
    opacity: 0.5;
  }
  p.location {
    font-weight: 500;
  }
  @media screen and (max-width: 1024px) {
    .headshot {
      --base-size: 160px;
    }
    h1 {
      font-size: 45px;
    }
    h2 {
      font-size: 16px;
    }
    p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 850px) {
    .headshot {
      --base-size: 140px;
    }
    h1 {
      font-size: 36px;
    }
    h2 {
      font-size: 14px;
    }
    p {
      font-size: 10px;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      font-size: 28px;
    }
    .headshot {
      --base-size: 120px;
    }
  }
`;
const ContentSectionStyles = styled.section`
  padding-left: 210px;
  max-width: var(--resume-width);
  margin: 0 auto 30px;
  display: flex;
  flex-wrap: wrap;
  h3,
  h4,
  p {
    margin: 0;
    line-height: 1.5;
  }
  h3 {
    font-size: 13px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    padding-bottom: 10px;
    color: #999;
    border-bottom: 1px solid #666;
    margin-bottom: 25px;
    flex-basis: 100%;
  }
  h4 {
    font-size: 15px;
    font-weight: 600;
    color: #ddd;
  }
  p {
    line-height: 1.5;
    color: #999;
  }
  .period {
    opacity: 0.4;
    font-size: 13px;
  }
  .block {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    flex-basis: 50%;
  }
  .logo {
    --base-size: 70px;
    width: var(--base-size);
    flex: 0 0 var(--base-size);
    height: var(--base-size);
    /* padding: 5px; */
    border: 2px solid #fff;
    margin-right: calc(var(--base-size) / 3.5);
  }
  @media screen and (max-width: 1024px) {
    padding-left: 190px;
    h3 {
      font-size: 12px;
    }
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 13px;
    }
    .period {
      font-size: 10px;
    }
    .logo {
      --base-size: 60px;
    }
  }
  @media screen and (max-width: 850px) {
    padding-left: 0;
  }
  @media screen and (max-width: 640px) {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    .block {
      flex-basis: 100%;
    }
  }
`;

const findImage = (imgArray, target) =>
  imgArray.find(img => img.images.fallback.src.endsWith(target));

const SummarySection = ({ images, person }) => {
  const socialItems = Object.keys(person.social);
  return (
    <SummarySectionStyles>
      <div className="basic">
        <div className="headshot">
          <GatsbyImage
            image={findImage(images, person.headshot)}
            alt={person.name}
          />
        </div>
        <div className="text">
          <h1>{person.name}</h1>
          <h2>{person.description}</h2>
          <p className="location">{person.location}</p>
          <ul>
            {socialItems.map((item, index) => (
              <li key={index}>
                <a
                  href={person.social[item]}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {socialIcons[item]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SummarySectionStyles>
  );
};
const ExperienceSection = ({ images, person }) => (
  <ContentSectionStyles>
    <h3>Experience</h3>
    {person.experience.map((item, index) => (
      <div className="block" key={index}>
        <div className="logo">
          <GatsbyImage
            image={findImage(images, item.logo)}
            alt={item.company}
          />
        </div>
        <div className="info">
          <h4>{item.title}</h4>
          <p className="detail">{item.company}</p>
          <p className="period">{item.period}</p>
        </div>
      </div>
    ))}
  </ContentSectionStyles>
);
const EducationSection = ({ images, person }) => (
  <ContentSectionStyles>
    <h3>Education</h3>
    {person.education.map((item, index) => (
      <div className="block" key={index}>
        <div className="logo">
          <GatsbyImage image={findImage(images, item.logo)} alt={item.school} />
        </div>
        <div className="info">
          <h4>{item.school}</h4>
          <p className="detail">{item.degree}</p>
          <p className="period">{item.period}</p>
        </div>
      </div>
    ))}
  </ContentSectionStyles>
);
export { ExperienceSection, EducationSection, SummarySection };
