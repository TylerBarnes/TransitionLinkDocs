const wordsbyConfig = {
  siteName: 'TransitionLink Docs',
  shortName: 'TransitionLink',
  siteDescription:
    'A Wordsby site for gatsby-plugin-transition-link (late 2018)',
  url: {
    base: 'transitionlink.temperance.online',
    protocol: 'https',
    pathPrefix: false,
  },
  manifest: {
    background_color: '#6b37bf',
    theme_color: '#6b37bf',
    display: 'minimal-ui',
  },
  keys: {
    previewToken: '7MBZO7KZmyIOzzHbkyweLs1xFUkjWNVQqQrWvAWMmZvCy8Qz7VLCEfFA',
    googleAnalyticsID: false,
  },
}

const previewPrefix = require('wordsby/preview')
const fullUrl = `${wordsbyConfig.url.protocol}://${wordsbyConfig.url.base}`

const gatsbyConfig = {
  pathPrefix: previewPrefix(), // if you need to add a prefix to this site, pass it as a string eg. previewPrefix("/some-prefix").
  siteMetadata: {
    siteUrl: fullUrl,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto mono\:300,400,400i,700`, // you can also specify font weights and styles
        ],
      },
    },
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        name: wordsbyConfig.siteName,
        short_name: wordsbyConfig.shortName,
        start_url: wordsbyConfig.url.startUrl
          ? wordsbyConfig.url.startUrl
          : '/',
        background_color: wordsbyConfig.manifest.background_color,
        theme_color: wordsbyConfig.manifest.theme_color,
        display: 'minimal-ui',
        icon: 'src/favicon.png',
        baseUrl: wordsbyConfig.url.base,
        protocol: wordsbyConfig.url.protocol,
        useACF: false, // this should be false as the wordsby rest api endpoint has ACF built in.
        verboseOutput: false,
        includedRoutes: [
          '**/wp-api-menus/v2/',
          '**/wp-api-menus/v2/**',
          '**/wp/v1/collections',
          '**/wp/v2/taxonomies',
          '**/wp/v2/media',
          '**/wp/v2/media/(?P<id>[d]+)',
        ],
        searchAndReplaceContentUrls: {
          sourceUrl: `${fullUrl}(?!/wp-content/)`, // this replaces all urls except for media library links allowing us to use the WP permalink structure.
          replacementUrl: '',
        },
      },
    },
    {
      resolve: 'wordsby',
      options: {
        previewToken: wordsbyConfig.keys.previewToken,
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
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
        color: wordsbyConfig.themeColor,
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
    // 'gatsby-plugin-offline',
  ],
}

if (wordsbyConfig.keys.googleAnalyticsID) {
  gatsbyConfig.plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: wordsbyConfig.keys.googleAnalyticsID,
    },
  })
}

module.exports = gatsbyConfig
