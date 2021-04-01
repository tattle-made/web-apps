module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true },
  siteMetadata: {
    title: `Tattle Services`,
    description: `Open Source and Publically Available tools to fight misinformation.`,
    author: `@tattlemade`,
    base_url: "https://services.tattle.co.in",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        icon: `src/images/tattle-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "services.tattle.co.in",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Raleway",
            weights: ["100..900"],
          },
          {
            family: "Bitter",
            weights: ["100..900"],
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: "FactcheckDashboardJSON",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
