import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import * as theme from '../theme'
import 'minireset.css'

import { graphql } from 'gatsby'
// import Img from 'gatsby-image'

const GlobalStyle = createGlobalStyle`
  ${theme.typographyString}
`

const styledTheme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

export default class MainLayout extends React.Component {
  render() {
    // const {
    //   data: {
    //     allFile: { edges: files },
    //   }
    // } = this.props
    console.log(this.props)

    const { children } = this.props
    // const logo = files[0].node.childImageSharp.fluid
    return (
      <ThemeProvider theme={styledTheme}>
        <>
          <Helmet>
            <meta name="description" />
          </Helmet>
          <GlobalStyle />
          {/* <Img className="logo" fluid={logo} /> */}
          {children}
        </>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
  query LogoQuery {
    allFile(filter: { name: { eq: "transition-link-logo" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`
