import React from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Card, { CardTag } from '../../components/Card'
import styled from 'styled-components'
import SidebarLayout from '../../layout/SidebarLayout'

const Examples = () => {
  return (
    <SidebarLayout>
      <h1>Tutorials</h1>
      <ExampleGrid>
        <Link swipe to="tutorials/swipe">
          <Card>
            <CardTag>AniLink</CardTag>
            Swipe
          </Card>
        </Link>
        <Link fade to="tutorials/fade">
          <Card>
            <CardTag>AniLink</CardTag>
            Fade
          </Card>
        </Link>
        <Link cover to="tutorials/cover">
          <Card>
            <CardTag>AniLink</CardTag>
            Cover
          </Card>
        </Link>
        <Link paintDrip to="tutorials/paint-drip">
          <Card>
            <CardTag>AniLink</CardTag>
            Paint Drip
          </Card>
        </Link>
        <Link cover to="tutorials/react-pose">
          <Card>
            <CardTag>TransitionLink</CardTag>
            React Pose
          </Card>
        </Link>
      </ExampleGrid>
    </SidebarLayout>
  )
}

const ExampleGrid = styled.section`
  @supports (display: grid) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 30px;
  }
`

export default Examples
