import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
import MenuItems from '../components/MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'

import PackageInstallText from '../components/PackageInstallText'
import Card from '../components/Card'

export default function home() {
  return (
    <Styles>
      <PackageInstallText>gatsby-plugin-transition-link</PackageInstallText>
      <h5>A Link component for page transitions in gatsbyjs</h5>

      <Edges>
        <Grid>
          <MenuItems slug="home-menu">
            {items => {
              return items.map(item => (
                <Grid.Unit
                  size={{ lg: 1 / 3 }}
                  key={`menu-item-${item.wordpress_id}`}
                >
                  <Link fade to={item.url}>
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
