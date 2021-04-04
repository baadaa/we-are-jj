import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';

const SEO = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `}
    render={({ site: { siteMetadata: seo } }) => {
      const { title } = seo;
      const { description } = seo;
      const { image } = seo;
      const url = seo.siteUrl;

      return (
        <React.Fragment>
          <Helmet>
            {/* General tags */}
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="image" content={image} />
            <link rel="canonical" href={url} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={url} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="baadaa" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
          </Helmet>
        </React.Fragment>
      );
    }}
  />
);
const ProfileSEO = props => {
  const { name, image, location, description } = props;
  const { siteUrl } = useSiteMetadata();
  return (
    <React.Fragment>
      <Helmet>
        {/* General tags */}
        <title>{`${name} :: JJ`}</title>
        <meta name="description" content={description} />
        <meta name="image" content={`${siteUrl}/${image}`} />
        <link rel="canonical" href={`${siteUrl}${location}`} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={`${siteUrl}${location}`} />
        <meta property="og:title" content={`${name} :: JJ`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}/${image}`} />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="baadaa" />
        <meta name="twitter:title" content={`${name} :: JJ`} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}/${image}`} />
      </Helmet>
    </React.Fragment>
  );
};

export default SEO;

export { ProfileSEO };
