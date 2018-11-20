import React from 'react'
import Helmet from 'react-helmet'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import * as theme from '../theme'
import 'minireset.css'
import styled from 'styled-components'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Link from 'gatsby-plugin-transition-link/AniLink'
import { LocationProvider } from '@reach/router'
import Edges from '../components/Edges'

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

class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <ThemeProvider theme={styledTheme}>
        <React.Fragment>
          <Helmet>
            <meta name="description" />
          </Helmet>
          <GlobalStyle />
          <StaticQuery
            query={graphql`
              {
                allFile(filter: { name: { eq: "transition-link-logo" } }) {
                  edges {
                    node {
                      childImageSharp {
                        fluid(maxWidth: 700) {
                          ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={query => {
              const {
                allFile: { edges: files },
              } = query
              const logo = files[0].node.childImageSharp.fluid
              return (
                <StyledEdges>
                  <Link fade to="/">
                    <StyledLogo
                      position={
                        this.props.currentLocation === '/'
                          ? 'center'
                          : 'top left'
                      }
                    >
                      <Img className="logo" fluid={logo} />
                    </StyledLogo>
                  </Link>
                </StyledEdges>
              )
            }}
          />
          {children}
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

const StyledEdges = styled(Edges)`
  position: relative;
`

const largeLogoWidth = 375

const StyledLogo = styled.article`
  width: ${largeLogoWidth}px;
  position: absolute;
  z-index: 100;
  left: 0;
  transform: translateX(calc(50vw - ${largeLogoWidth / 2}px));
  top: 50px;
  transition: 1s all ease;

  ${props =>
    props.position === 'top left'
      ? `
        width: 150px;
        left: 0;
        transform: translateX(0);
      `
      : null};
`
const MainLayout = props => (
  <LocationProvider>
    {context => (
      <Layout currentLocation={context.location.pathname} {...props}>
        {props.children}
      </Layout>
    )}
  </LocationProvider>
)

export default MainLayout
