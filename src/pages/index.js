import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'react-emotion'

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
      <Card>Installation</Card>
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
