module.exports = {
  siteMetadata: {
    title: `Dan Spratling's Blog`,
    author: `Dan Spratling`,
    description: `Learn new frontend JAMstack techniques using JavaScript & Gatsby`,
    siteUrl: `https://danspratling.com`,
    social: {
      twitter: `https://twitter.com/dan_spratling`,
      github: `https://github.com/danspratling`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: `assets`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-vscode`,
            // All options are optional. Defaults shown here.
            options: {
              colorTheme: 'Solarized Dark',
            },
          },
        ],
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dan Spratling Blog`,
        short_name: `DS_Blog`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
  ],
}
