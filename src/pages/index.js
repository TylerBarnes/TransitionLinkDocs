import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
import { MenuItems } from 'wordsby/components'
import Link from 'gatsby-plugin-transition-link/AniLink'

import PackageInstallText from '../components/PackageInstallText'
import Card from '../components/Card'

export default function home({
  data: {
    allFile: { edges: files },
  },
}) {
  const logo = files[0].node.childImageSharp.fluid

  return (
    <Styles>
      <Img className="logo" fluid={logo} />

      <PackageInstallText>gatsby-plugin-transition-link</PackageInstallText>
      <h5>A Link component for page transitions in gatsbyjs</h5>

      <Edges>
        <Grid>
          <MenuItems slug="home-menu">
            {items => {
              return items.map(item => (
                <Grid.Unit size={{ lg: 1 / 3 }}>
                  <Link
                    fade
                    key={`menu-item-${item.wordpress_id}`}
                    to={item.url}
                  >
                    <Card>{item.title}</Card>
                  </Link>
                </Grid.Unit>
              ))
            }}
          </MenuItems>
        </Grid>
      </Edges>
    </Styles>
  )
}

const Styles = styled.section`
  text-align: center;

  .logo {
    max-width: 50vh;
    margin: 0 auto;
  }
`

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
