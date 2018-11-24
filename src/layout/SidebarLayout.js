import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
import MenuItems from '../components/MenuItems'
import Link from 'gatsby-plugin-transition-link/AniLink'

export default function SidebarLayout(props) {
  return (
    <LayoutStyles>
      <Edges>
        <Grid>
          <Sidebar size={{ md: 1 / 4 }}>
            {!!props.sidebar ? props.sidebar : <DefaultSidebar />}
          </Sidebar>
          <Content size={{ md: 3 / 4 }}>{props.children}</Content>
        </Grid>
      </Edges>
    </LayoutStyles>
  )
}

const DefaultSidebar = () => {
  return (
    <>
      <ol>
        <MenuItems slug="home-menu">
          {items =>
            items.map(item => (
              <li key={item.url}>
                <Link fade to={item.url}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </MenuItems>
      </ol>
    </>
  )
}

const Sidebar = styled(Grid.Unit)`
  padding-top: 88px;
`

const LayoutStyles = styled.section`
  padding-top: 120px;
`

const Content = styled(Grid.Unit)``
