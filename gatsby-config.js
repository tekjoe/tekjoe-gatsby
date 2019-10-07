require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `tekjoe`,
    description: `Joe Ramirez – Freelance web developer with a proven track record of helping small businesses grow and prosper online.`,
    author: `@tekjoe`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.MY_SANITY_PROJECTID,
        dataset: process.env.MY_SANITY_DATASET,
        token: process.env.MY_SANITY_TOKEN,
      },
    },
  ],
}
