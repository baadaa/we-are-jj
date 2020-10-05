/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-svg-sprite`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Homepoint Glossary`,
        short_name: `HP Glossary`,
        start_url: `/`,
        background_color: `#0c3258`,
        theme_color: `#0c3258`,
        display: `minimal-ui`,
        icon: `src/assets/blue-dot.png`, // This path is relative to the root of the site.
      },
    },
  ],
};
