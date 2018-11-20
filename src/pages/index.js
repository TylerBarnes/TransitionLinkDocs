import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
import MenuItems from '../components/MenuItems'
import TransitionLink from 'gatsby-plugin-transition-link'
import TimelineMax from 'gsap'

import PackageInstallText from '../components/PackageInstallText'
import Card from '../components/Card'

const exitHomeTrans = ({ exit, node }) => {
  const cards = Array.from(node.querySelectorAll('.card'))
  const staggerDelay = exit.length / cards.length
  console.log(node)
  setTimeout(() => console.log(node), 1000)
  // return new TimelineMax().to(node, 1, { yPercent: '-100%' })
  // return new TimelineMax().staggerTo(
  //   cards,
  //   1,
  //   // exit.length,
  //   { yPercent: '=50%', opacity: 0 },
  //   0.2
  // )
}

export default function home(props) {
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
                  <TransitionLink
                    to={item.url}
                    exit={{ length: 10, trigger: exitHomeTrans }}
                    entry={{ delay: 0.4 }}
                  >
                    <div className="card">
                      <Card>{item.title}</Card>
                    </div>
                  </TransitionLink>
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

  padding-top: 400px;
  padding-bottom: 100px;

  .logo {
    max-width: 50vh;
    margin: 0 auto;
  }
`
