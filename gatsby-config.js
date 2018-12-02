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
    googleAnalyticsID: 'UA-130196764-2',
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
          `Rubik`,
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
          // '**/wp/v2/taxonomies',
          '**/wp/v1/tax-terms',
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
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-netlify',
  ],
}

if (process.env.NODE_ENV === 'production') {
  gatsbyConfig.plugins.push('gatsby-plugin-offline')
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
  wordsbyConfig.keys.googleAnalyticsID &&
  process.env.NODE_ENV === 'production'
) {
  gatsbyConfig.plugins.push({
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      trackingId: wordsbyConfig.keys.googleAnalyticsID,
    },
  })
}

module.exports = gatsbyConfig
