require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: 'Mike Lambert',
    description: "Mike Lambert's personal website",
    author: 'Mike Lambert',
  },
  plugins: [
    'gatsby-plugin-typography',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken:
          process.env.GATSBY_CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN,
      },
    },
  ],
};
