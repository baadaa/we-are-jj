import React from 'react';
import { graphql } from 'gatsby';

import { ProfileLayout } from '../components/Layout';
import { ProfileSEO } from '../components/seo';
import { resumeData } from '../data/resume';
import {
  SummarySection,
  ExperienceSection,
  EducationSection,
} from '../components/resumeElements';

const AllenPage = ({ location, data }) => {
  const person = resumeData.find(member => member.name === 'Allen');
  const imgArray = data.allImageSharp.edges.map(
    item => item.node.gatsbyImageData
  );

  return (
    <ProfileLayout location={location.pathname}>
      <ProfileSEO
        name={person.name}
        description={person.description}
        location={location.pathname}
        image={person.headshot}
      />
      <SummarySection images={imgArray} person={person} />
      <ExperienceSection images={imgArray} person={person} />
      <EducationSection images={imgArray} person={person} />
    </ProfileLayout>
  );
};
export default AllenPage;

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          id
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
`;
