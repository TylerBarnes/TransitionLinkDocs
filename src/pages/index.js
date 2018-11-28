import React, { Component } from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
import MenuItems from '../components/MenuItems'
import TransitionLink from 'gatsby-plugin-transition-link'
import TimelineMax from 'gsap'

import PackageInstallText from '../components/PackageInstallText'
import Card from '../components/Card'
import StaggerText from '../components/StaggerText'

class home extends Component {
  constructor(props) {
    super(props)
    this.page = React.createRef()
  }

  componentDidMount() {
    new TimelineMax.staggerFromTo(
      this.page.querySelectorAll('.card'),
      1,
      { yPercent: '+=50%' },
      { yPercent: '0%' },
      0.2
    )
    return new TimelineMax.fromTo(this.page, 1, { opacity: 0 }, { opacity: 1 })
  }

  exitHomeTrans = ({ exit, node }) => {
    const cards = Array.from(node.querySelectorAll('.card'))
    const staggerDelay = exit.length / cards.length

    new TimelineMax.to(this.page, exit.length, { opacity: 0 }, '=+2')

    return new TimelineMax.staggerTo(
      cards,
      exit.length,
      { yPercent: '+=50%', opacity: 0 },
      staggerDelay
    )
  }

  fadeInNext = ({ node, entry }) => {
    new TimelineMax.fromTo(node, entry.length, { opacity: 0 }, { opacity: 1 })
  }

  render() {
    return (
      <Styles ref={n => (this.page = n)}>
        <PackageInstallText>gatsby-plugin-transition-link</PackageInstallText>
        <StaggerText>
          <h6>A Link component for page transitions in gatsbyjs</h6>
        </StaggerText>

        <Edges>
          <StyledGrid>
            <MenuItems slug="home-menu">
              {items => {
                return items.map(item => (
                  <Grid.Unit
                    size={{ lg: 1 / 3 }}
                    key={`menu-item-${item.wordpress_id}`}
                  >
                    <TransitionLink
                      to={item.url}
                      exit={{ length: 1, trigger: this.exitHomeTrans }}
                      entry={{
                        delay: 0.5,
                        length: 1,
                        trigger: this.fadeInNext,
                      }}
                    >
                      <div className="card">
                        <Card>{item.title}</Card>
                      </div>
                    </TransitionLink>
                  </Grid.Unit>
                ))
              }}
            </MenuItems>
          </StyledGrid>
        </Edges>
      </Styles>
    )
  }
}

export default home

const StyledGrid = styled(Grid)`
  margin-top: 50px;
`

const Styles = styled.section`
  text-align: center;

  padding-top: 400px;
  padding-bottom: 100px;
  z-index: 10;
  position: relative;

  .logo {
    max-width: 50vh;
    margin: 0 auto;
  }
`
