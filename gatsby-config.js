const config = {
  themeColor: '#6b37bf',
  keys: {
    googleAnalyticsID: 'UA-130196764-2',
  },
}

const previewPrefix = require('gatsby-plugin-wordsby/preview-prefix')

const gatsbyConfig = {
  pathPrefix: previewPrefix(), // if you need to add a prefix to this site, pass it as a string eg. previewPrefix("/some-prefix").
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono\:300,400,400i,700`, // you can also specify font weights and styles
          `Rubik`,
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "wordsby",
        path: `${__dirname}/wordsby/`
      }
    },
    'gatsby-plugin-wordsby',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `{
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage(filter: {context: {id: {ne: null}}}) {
            edges {
              node {
                path
                context {
                  id
                }
              }
            }
          }
      }`,
      },
    },
    {
      resolve: 'gatsby-plugin-transition-link',
      options: {
        layout: require.resolve(`./src/layout/index.js`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
  ],
}

if (process.env.NODE_ENV === 'production') {
  gatsbyConfig.plugins.push('gatsby-plugin-offline')
  gatsbyConfig.plugins.push('gatsby-plugin-favicon')
  gatsbyConfig.plugins.push({
    resolve: 'gatsby-plugin-sentry',
    options: {
      dsn: 'https://a47417f5ba3341d2a8542fbb67e00d0e@sentry.io/1335429',
      // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
      config: {
        environment: 'live',
      },
    },
  })
}

if (
  config.keys.googleAnalyticsID &&
  process.env.NODE_ENV === 'production'
) {
  gatsbyConfig.plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: config.keys.googleAnalyticsID,
    },
  })
}

module.exports = gatsbyConfig
