import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
import MenuItems from '../components/MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'
import * as theme from '../theme'

export default function SidebarLayout(props) {
  return (
    <LayoutStyles>
      <Edges>
        <Grid>
          <SidebarSpace size={{ md: 1 / 4 }} />
          <Content size={{ md: 3 / 4 }}>{props.children}</Content>
        </Grid>
      </Edges>
    </LayoutStyles>
  )
}

export const DefaultSidebar = ({ show }) => {
  return (
    <SidebarStyles show={show}>
      <SidebarMenu>
        <MenuItems slug="home-menu">
          {items =>
            items.map(({ url, title, active, activeParent }) => (
              <li key={url}>
                <Link
                  className={active || activeParent ? 'active' : ''}
                  fade
                  to={url}
                >
                  {title}
                </Link>
              </li>
            ))
          }
        </MenuItems>
      </SidebarMenu>
      <GithubLink
        href="https://github.com/TylerBarnes/gatsby-plugin-transition-link"
        target="_blank"
      >
        View source on Github
      </GithubLink>

      <TyLink href="https://tylerbarnes.ca" target="_blank">
        Made with Love by <span>TY</span>.
      </TyLink>
    </SidebarStyles>
  )
}

const GithubLink = styled.a`
  margin-top: 100px;
  display: block;
`

const TyLink = styled.a`
  &,
  span {
    color: ${theme.color.lightGreen};
  }
  span {
    text-decoration: underline;
  }
`

const SidebarStyles = styled.nav`
  position: fixed;
  top: 210px;
  z-index: 10;

  ${props =>
    !props.show
      ? `
        display: none;
      `
      : null};
`

const SidebarMenu = styled.ol`
  .active {
    text-decoration: underline;
  }
`

const SidebarSpace = styled(Grid.Unit)`
  padding-top: 88px;
`

const LayoutStyles = styled.section`
  padding-top: 120px;
  min-height: 100vh;
  background: white;
`

const Content = styled(Grid.Unit)``
