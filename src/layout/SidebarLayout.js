import React from 'react'
import styled from 'styled-components'
import Grid from 'styled-components-grid'
import Edges from '../components/Edges'
// import MenuItems from '../components/MenuItems'
// import Link from 'gatsby-plugin-transition-link/AniLink'

export default function SidebarLayout(props) {
  return (
    <Edges>
      <Grid>
        <Sidebar size={{ md: 1 / 4 }}>
          {!!props.sidebar ? props.sidebar : <h1>sidebar</h1>}
        </Sidebar>
        <Content size={{ md: 3 / 4 }}>{props.children}</Content>
      </Grid>
    </Edges>
  )
}

const Sidebar = styled(Grid.Unit)`
  /* background: red; */
`

const Content = styled(Grid.Unit)``
