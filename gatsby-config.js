/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: 'JJ :: A Non-Secret Society',
    description: `We are a group of eleven, not by design but by accident. With eclectic day jobs across many industries, we bring eccentric tastes and expertise to accomplish great things together—from personal to professional matters. We are friends, brothers, comrades and a family.`,
    siteUrl: 'https://wearejj.com',
    image: 'https://wearejj.com/we-are-jj.jpg',
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `We are JJ`,
        short_name: `JJ`,
        start_url: `/`,
        background_color: `#7C1D3D`,
        theme_color: `#7C1D3D`,
        display: `minimal-ui`,
        icon: `src/assets/jj.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
