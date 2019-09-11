module.exports = {
  siteMetadata: {
    title: `Tattle - Text Extractor`,
    description: `We specialize in extracting text out of memes`,
    author: `@tattle-made`,
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
    `gatsby-plugin-theme-ui`,
    `gatsby-theme-style-guide`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/gatsby-plugin-typography`,
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/centered-container.js"),
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
