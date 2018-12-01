import React from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Card, { CardTag } from '../../components/Card'
import styled from 'styled-components'
import SidebarLayout from '../../layout/SidebarLayout'
import LetterSlide from '../../components/LetterSlide'
import PaginationLinks from '../../components/PaginationLinks'
import ArrowLink from '../../components/ArrowLink'

const Examples = () => {
  return (
    <SidebarLayout>
      <LetterSlide>
        <h1>Tutorials</h1>
      </LetterSlide>
      <ExampleGrid>
        <Link swipe to="tutorials/swipe">
          <Card>
            <CardTag>AniLink</CardTag>
            Swipe
          </Card>
        </Link>
        <Link fade to="tutorials/fade" duration={1}>
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
      <PaginationLinks>
        <ArrowLink direction="left" to="/overview/">
          Back to Overview
        </ArrowLink>
        <ArrowLink direction="right" to="/usage/">
          Up next Docs
        </ArrowLink>
      </PaginationLinks>
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
