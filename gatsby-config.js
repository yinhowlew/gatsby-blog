/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Strong Opinions, Loosely Held`,
    author: 'yinhow',
    siteUrl: 'https://yinhow.com',
    description: 'yinhow personal blog',
    keywords: ['tech','product','startup','coding','poker', "yin how lew", "yinhowlew"]
  },
  plugins: [
     {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    // for images in pages
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/assets/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    // 'gatsby-plugin-dark-mode',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,    
    `gatsby-plugin-react-helmet`,    
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-165622494-1",
      },
    },
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    `@pauliescanlon/gatsby-mdx-embed`
  ],
}
